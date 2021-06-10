const path = require('path')
const fs = require('fs')
const { promisify } = require('util');
const { optimize } = require('svgo');

const svgoConfig = {
    plugins: [
        'cleanupAttrs',
        'removeDoctype',
        'removeXMLProcInst',
        'removeComments',
        'removeMetadata',
        'removeTitle',
        'removeDesc',
        'removeUselessDefs',
        'removeEditorsNSData',
        'removeEmptyAttrs',
        'removeHiddenElems',
        'removeEmptyText',
        'removeEmptyContainers',
        // 'removeViewBox',
        'cleanupEnableBackground',
        'convertStyleToAttrs',
        'convertColors',
        'convertPathData',
        'convertTransform',
        'removeUnknownsAndDefaults',
        'removeNonInheritableGroupAttrs',
        'removeUselessStrokeAndFill',
        'removeUnusedNS',
        'cleanupIDs',
        'cleanupNumericValues',
        'moveElemsAttrsToGroup',
        'moveGroupAttrsToElems',
        'collapseGroups',
        // 'removeRasterImages',
        'mergePaths',
        'convertShapeToPath',
        'sortAttrs',
        'removeDimensions',
        { name: 'removeAttrs', params: { attrs: '(stroke|fill)' } },
    ],
};

const readdir = promisify(fs.readdir);
const readFilePromise = promisify(fs.readFile);

// const exampleObject = {
//     "activity": "<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"></polyline>",
//     "airplay": "<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path><polygon points=\"12 15 17 21 7 21 12 15\"></polygon>",
// }

const clearSvg = /(<\s*svg[^>]*>?.*?<\s*\/\s*svg>)/;
const svgRegex = /<\s*svg[^>]*>?(?:<title[^>]*>.*?<\/title>)?(.*?)<\s*\/\s*svg>/;

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}
const parseDir = async (dir, obj = {}) => {
    const icons = await readdir(dir);
    await asyncForEach(icons, async (icon) => {
        try {
            const svgName = icon.split('fi-rr-')[1].slice(0, -4);

            const content = await readFilePromise(path.join(dir, icon), 'utf8');
            const minifiedContent = optimize(content, { path: path.join(dir, icon), ...svgoConfig }).data;
            const svgContent = minifiedContent.match(svgRegex)[1];
            obj[svgName] = svgContent
        } catch (err) {
            console.log(`Error @file ${icon}`, err);
        }
    });
    return obj;
}

const parseIcons = async () => {
    const obj = await parseDir('icons/')
    // console.log('test', obj);
    fs.writeFile("icons.json", JSON.stringify(obj), (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
        }
    });
}
parseIcons()


