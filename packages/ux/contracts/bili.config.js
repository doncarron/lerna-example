// bili.config.js
let resolve = require('rollup-plugin-node-resolve');
let nodeGlobal = require('rollup-plugin-node-globals');
let excludePeerDeps = require('rollup-plugin-peer-deps-external');
let typescript = require('rollup-plugin-typescript2');
let babel = require('rollup-plugin-babel');
let autoprefixer = require('autoprefixer');

const cssExportMap = {};

module.exports = {
  filename: "index[suffix].js",
  plugin: [
    excludePeerDeps({
      doIncludeDeps: true
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    typescript({
      tsconfig: "tsconfig.build.json",
      clean: true
    }),
    babel()
  ]
}