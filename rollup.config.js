import svelte from "rollup-plugin-svelte";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import generatePackageJson from "rollup-plugin-generate-package-json";
// import { getFolders } from "./scripts/buildUtils.js";

import pkg from "./package.json" assert { type: "json" };

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
	.replace(/^\w/, (m) => m.toUpperCase())
	.replace(/-\w/g, (m) => m[1].toUpperCase());

const plugins = [svelte(), peerDepsExternal(), resolve(), commonjs(), terser()];

// const subfolderPlugins = (folderName) => [
// 	...plugins,
// 	generatePackageJson({
// 		baseContents: {
// 			name: `${pkg.name}/${folderName}`,
// 			private: true,
// 			main: "../cjs/index.js",
// 			module: "./index.js",
// 			types: "./index.d.ts",
// 		},
// 	}),
// ];

// const folderBuilds = getFolders("./src/exports").map((folder) => {
// 	return {
// 		input: `src/exports/${folder}/index.js`,
// 		output: {
// 			file: `dist/${folder}/index.js`,
// 			sourcemap: true,
// 			exports: "named",
// 			format: "esm",
// 		},
// 		plugins: subfolderPlugins(folder),
// 	};
// });

export default [
	{
		input: ["src/compiled/index.js"],
		output: [
			{
				file: pkg.module,
				format: "esm",
				sourcemap: true,
				exports: "named",
			},
		],
		plugins,
	},
	{
		input: ["src/compiled/index.js"],
		output: [
			{
				file: pkg.main,
				format: "cjs",
				sourcemap: true,
				exports: "named",
			},
		],
		plugins,
	},
];

// export default [
// 	{
// 		input: ["src/exports/index.js"],
// 		output: [
// 			{
// 				file: pkg.module,
// 				format: "esm",
// 				sourcemap: true,
// 				exports: "named",
// 			},
// 		],
// 		plugins,
// 	},
// 	...folderBuilds,
// 	{
// 		input: ["src/exports/index.js"],
// 		output: [
// 			{
// 				file: pkg.main,
// 				format: "cjs",
// 				sourcemap: true,
// 				exports: "named",
// 			},
// 		],
// 		plugins,
// 	},
// ];

// export default [
// 	{
// 		input: "src/brands.js",
// 		output: [
// 			{ file: "brands.mjs", format: "es" },
// 			{ file: "brands.js", format: "umd", name },
// 		],
// 		plugins: [...plugins],
// 	},
// 	{
// 		input: "src/rr.js",
// 		output: [
// 			{ file: "rr.mjs", format: "es" },
// 			{ file: "rr.js", format: "umd", name },
// 		],
// 		plugins: [...plugins],
// 	},
// 	{
// 		input: "src/sr.js",
// 		output: [
// 			{ file: "sr.mjs", format: "es" },
// 			{ file: "sr.js", format: "umd", name },
// 		],
// 		plugins: [...plugins],
// 	},
// ];
