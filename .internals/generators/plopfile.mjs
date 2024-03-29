import { pagesGenerator } from './page/index.mjs';
import { modalGenerator } from './modal/index.mjs';
import { componentGenerator } from './component/index.mjs';
import { ApiRouteGenerator } from './api-route/index.mjs';
import inquirerFileTreeSelection from 'inquirer-file-tree-selection-prompt';
import { createRequire } from 'module';
import { pagesBaseGeneratorPath } from './paths.js';
import { SliceGenerator } from './slice/index.mjs';
const require = createRequire(import.meta.url);

export default async function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setHelper('ifEquals', function (arg1, arg2, options) {
    return arg1 == arg2 ? options.fn(this) : options.inverse(this);
  });

  plop.setHelper('getApiName', function (arg) {
    const path = arg.replace(pagesBaseGeneratorPath, '');
    const api_path = path.replaceAll('\\', '/').replace('.ts', '');
    return api_path;
  });

  plop.setHelper('ifIncludes', function () {
    const options = arguments[arguments.length - 1];
    const array = arguments[0];
    const args = [];
    for (const key in arguments) {
      if (key === '0') continue;
      if (key === (arguments.length - 1).toString()) continue;
      args.push(arguments[key]);
    }
    return args.every((value) => {
      return array.includes(value);
    })
      ? options.fn(this)
      : options.inverse(this);
  });

  plop.setHelper('ifIncludesAny', function () {
    const options = arguments[arguments.length - 1];
    const array = arguments[0];
    const args = [];
    for (const key in arguments) {
      if (key === '0') continue;
      if (key === (arguments.length - 1).toString()) continue;
      args.push(arguments[key]);
    }
    return args.some((value) => {
      return array.includes(value);
    })
      ? options.fn(this)
      : options.inverse(this);
  });

  plop.setPrompt('directory', require('inquirer-directory'));
  plop.setPrompt('file-tree-selection', inquirerFileTreeSelection);

  plop.setGenerator('page', pagesGenerator);

  plop.setGenerator('slice', SliceGenerator);

  plop.setGenerator('api route', ApiRouteGenerator);

  plop.setGenerator('modal', modalGenerator);

  plop.setGenerator('component', componentGenerator);
}
