// @ts-check
const { typedConfiguration } = require('@stylable/cli');
exports.stcConfig = typedConfiguration({
    options: {
        srcDir: './src',
        outDir: './st-types',
        dts: true,
        dtsSourceMap: true,
        cjs: false,
    },
});
