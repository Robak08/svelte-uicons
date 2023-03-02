import fs from "fs-extra";
import path from "path";
import {
	parseUiconsObject,
	returnComponentCode,
	read_object_prop,
} from "./utils.js";

import uicons from "../src/parsed/icons.json" assert { type: "json" };

const icons = parseUiconsObject(uicons);

Promise.all(
	icons.map((icon) => {
		const filepath = `./src/icons/${icon.path}/${icon.pascalCasedComponentName}.svelte`;
		const iconData = read_object_prop(uicons, icon.objectPath);
		return fs
			.ensureDir(path.dirname(filepath))
			.then(() =>
				fs.writeFile(filepath, returnComponentCode(icon, iconData), "utf8")
			);
	})
).then(async () => {
	const brandsArray = [];
	const rrArray = [];
	const srArray = [];
	for (const icon of icons) {
		switch (icon.path) {
			case "brands":
				brandsArray.push(icon);
				break;
			case "rounded/regular":
				rrArray.push(icon);
				break;
			case "rounded/solid":
				srArray.push(icon);
				break;
		}
	}
	const brands = brandsArray
		.map(
			(icon) =>
				`export { default as ${icon.pascalCasedComponentName} } from '../../icons/brands/${icon.pascalCasedComponentName}.svelte'`
		)
		.join("\n\n");
	await fs.outputFile(
		"./src/exports/brands/index.d.ts",
		'///<reference types="svelte" />\n\n' + brands,
		"utf8"
	);
	await fs.outputFile("./src/exports/brands/index.js", brands, "utf8");

	const rr = rrArray
		.map(
			(icon) =>
				`export { default as ${icon.pascalCasedComponentName} } from '../../icons/rounded/regular/${icon.pascalCasedComponentName}.svelte'`
		)
		.join("\n\n");
	await fs.outputFile(
		"./src/exports/rr/index.d.ts",
		'///<reference types="svelte" />\n\n' + rr,
		"utf8"
	);
	await fs.outputFile("./src/exports/rr/index.js", rr, "utf8");

	const sr = srArray
		.map(
			(icon) =>
				`export { default as ${icon.pascalCasedComponentName} } from '../../icons/rounded/solid/${icon.pascalCasedComponentName}.svelte'`
		)
		.join("\n\n");
	await fs.outputFile(
		"./src/exports/sr/index.d.ts",
		'///<reference types="svelte" />\n\n' + sr,
		"utf8"
	);
	await fs.outputFile("./src/exports/sr/index.js", sr, "utf8");

	const main = `export * from './brands';\nexport * from './rr';\nexport * from './sr';`;
	return await fs.outputFile("./src/exports/index.js", main, "utf8");
});
