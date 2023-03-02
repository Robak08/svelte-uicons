import { readdirSync } from "fs";
import fs from "fs-extra";
import path from "path";
import { promisify } from "util";
import { optimize } from "svgo";
import { pascalCase } from "change-case";

export const getDirectories = (source) =>
	readdirSync(source, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

/** iconType: rounded/solid */
export const handleComponentName = (name) =>
	// `${name.replace(/\-(\d+)/, "$1")}-${iconType}-icon`;
	name.replace(/\-(\d+)/, "$1");

export const returnComponentCode = (icon, iconObject) => `<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="${
		iconObject.viewbox || "0 0 24 24"
	}"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-${
	icon.name
} {customClass}">${iconObject.content}</svg>
  `;

// PREPARE PART

export const BASE_SVG_PATH = "./src/svg";
export const svgoConfig = {
	plugins: [
		"cleanupAttrs",
		"removeDoctype",
		"removeXMLProcInst",
		"removeComments",
		"removeMetadata",
		"removeTitle",
		"removeDesc",
		"removeUselessDefs",
		"removeEditorsNSData",
		"removeEmptyAttrs",
		"removeHiddenElems",
		"removeEmptyText",
		"removeEmptyContainers",
		// 'removeViewBox',
		"cleanupEnableBackground",
		"convertStyleToAttrs",
		"convertColors",
		"convertPathData",
		"convertTransform",
		"removeUnknownsAndDefaults",
		"removeNonInheritableGroupAttrs",
		"removeUselessStrokeAndFill",
		"removeUnusedNS",
		"cleanupIds",
		"cleanupNumericValues",
		"moveElemsAttrsToGroup",
		"moveGroupAttrsToElems",
		"collapseGroups",
		// 'removeRasterImages',
		"mergePaths",
		"convertShapeToPath",
		"sortAttrs",
		"removeDimensions",
		{ name: "removeAttrs", params: { attrs: "(stroke|fill)" } },
	],
};

export const translateIconTypeToId = (iconType) => {
	switch (iconType) {
		case "brands":
			return "brands";
		case "rounded/regular":
			return "rr";
		case "rounded/solid":
			return "sr";
	}
};

export const readdir = promisify(fs.readdir);
export const readFilePromise = promisify(fs.readFile);

const clearSvg = /(<\s*svg[^>]*>?.*?<\s*\/\s*svg>)/;
export const svgRegex =
	/<\s*svg[^>]*>?(?:<title[^>]*>.*?<\/title>)?(.*?)<\s*\/\s*svg>/;

export const asyncForEach = async (array, callback) => {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
};

// file names rr - regular rounded, sr - solid rounded, brands - brands
export const parseDirIcons = async (dir, iconType) => {
	const icons = await readdir(dir);
	const iconObj = {};
	const iconTypeId = translateIconTypeToId(iconType);
	await asyncForEach(icons, async (icon) => {
		try {
			const svgName = icon.split(`fi-${iconTypeId}-`)[1].slice(0, -4);
			const content = await readFilePromise(path.join(dir, icon), "utf8");
			const minifiedContent = optimize(content, {
				path: path.join(dir, icon),
				...svgoConfig,
			}).data;
			// console.log(minifiedContent.match(svgRegex)[1]);
			const svgContent = minifiedContent.match(svgRegex)[1];
			const svgViewbox = minifiedContent
				.match(svgRegex)[0]
				.match(/(?:viewBox=\"(\b[^"]*)\")/)[1];
			iconObj[svgName] = {
				content: svgContent,
				viewbox: svgViewbox,
			};
		} catch (err) {
			console.log(`Error @file ${icon}`, err);
		}
	});
	return iconObj;
};

// BUILD PART
export const read_object_prop = (obj, prop) => {
	if (prop.includes(".")) {
		const props = prop.split(".");
		if (props.length === 1) {
			return obj[props[0]];
		} else if (props.length === 2) {
			return obj[props[0]][props[1]];
		} else if (props.length === 3) {
			return obj[props[0]][props[1]][props[2]];
		}
	} else {
		return obj[prop];
	}
};

export const parseUiconsObject = (iconsObj) => {
	const iconsArray = [];
	Object.keys(iconsObj).map((iconType) => {
		if (iconType === "brands") {
			Object.keys(iconsObj[iconType]).map((icon) => {
				const filePath = `${iconType}`;
				const componentName = `${handleComponentName(icon)}-icon`;
				iconsArray.push({
					icon,
					path: filePath,
					objectPath: `${iconType}.${icon}`,
					pascalCasedComponentName: pascalCase(componentName),
					kebabCasedComponentName: componentName,
				});
			});
		} else {
			Object.keys(iconsObj[iconType]).map((subIconType) => {
				Object.keys(iconsObj[iconType][subIconType]).map((icon) => {
					const filePath = `${iconType}/${subIconType}`;
					const componentName = `${handleComponentName(icon)}-icon`;
					iconsArray.push({
						icon,
						path: filePath,
						objectPath: `${iconType}.${subIconType}.${icon}`,
						pascalCasedComponentName: pascalCase(componentName),
						kebabCasedComponentName: componentName,
					});
				});
			});
		}
	});
	return iconsArray;
};
