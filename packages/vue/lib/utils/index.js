'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const camelizeRE = /-(\w)/g;
const camelize = (str) => str.replace(camelizeRE, (_, c) => c.toUpperCase());

function withInstall(options) {
  options.install = (app) => {
    const { name } = options;
    app.component(name, options);
    app.component(camelize(`-${name}`), options);
  };
  return options;
}

exports.camelize = camelize;
exports.withInstall = withInstall;