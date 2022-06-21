const path = require("path");
const { pascalCase } = require("pascal-case");
const fs = require("fs-extra");

const uicon = require("./src/rounded/icons.json");
const handleComponentName = (name) => name.replace(/\-(\d+)/, "$1");

const component = (icon) => `<script>
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
		uicon[icon.name].viewbox || "0 0 24 24"
	}"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-${
	icon.name
} {customClass}">${uicon[icon.name].content}</svg>
  `;

const icons = Object.keys(uicon).map((name) => ({
	name,
	pascalCasedComponentName: pascalCase(`${handleComponentName(name)}-icon`),
	kebabCasedComponentName: `${handleComponentName(name)}-icon`,
}));

Promise.all(
	icons.map((icon) => {
		const filepath = `./src/icons/${icon.pascalCasedComponentName}.svelte`;
		return fs
			.ensureDir(path.dirname(filepath))
			.then(() => fs.writeFile(filepath, component(icon), "utf8"));
	})
).then(async () => {
	const main = icons
		.map(
			(icon) =>
				`export { default as ${icon.pascalCasedComponentName} } from './icons/${icon.pascalCasedComponentName}.svelte'`
		)
		.join("\n\n");
	await fs.outputFile(
		"index.d.ts",
		'///<reference types="svelte" />\n\n' + main,
		"utf8"
	);
	return await fs.outputFile("./src/index.js", main, "utf8");
});
