import fs from "fs-extra";

import { parseDirIcons, BASE_SVG_PATH, getDirectories } from "./utils.js";

const parseIcons = async () => {
	const roundedIconFolders = getDirectories(`${BASE_SVG_PATH}/rounded`);
	const iconsMainObject = {
		brands: {},
		rounded: {},
	};
	// rounded icons parse
	for (const icon of roundedIconFolders) {
		const iconTypePath = `rounded/${icon}`;
		iconsMainObject.rounded[icon] = await parseDirIcons(
			`${BASE_SVG_PATH}/${iconTypePath}`,
			iconTypePath
		);
		// console.log(folderString);
	}
	// brands icons parse
	iconsMainObject.brands = await await parseDirIcons(
		`${BASE_SVG_PATH}/brands`,
		"brands"
	);

	// const obj = await parseDirIcons("icons/");
	// console.log("test", iconsMainObject);
	fs.writeFile("./src/parsed/icons.json", JSON.stringify(iconsMainObject), (err) => {
		if (err) console.log(err);
		else {
			console.log("File written successfully\n");
		}
	});
};
parseIcons();
