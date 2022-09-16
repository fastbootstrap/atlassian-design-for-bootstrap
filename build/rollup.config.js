"use strict";

const path = require("path");
const { babel } = require("@rollup/plugin-babel");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const banner = require("./banner.js");
let fileDestination = `fastbootstrap`;

const plugins = [
  babel({
    exclude: "node_modules/**",
    babelHelpers: "bundled",
  }),
  replace({
    "process.env.NODE_ENV": '"production"',
    preventAssignment: true,
  }),
  nodeResolve(),
];

const globals = {};

const rollupConfig = {
  input: path.resolve(__dirname, `../src/js/fastbootstrap.js`),
  output: {
    banner,
    file: path.resolve(__dirname, `../dist/js/${fileDestination}.js`),
    format: "umd",
    globals,
    generatedCode: "es2015",
  },
  plugins,
};

rollupConfig.output.name = "bootstrap";

module.exports = rollupConfig;
