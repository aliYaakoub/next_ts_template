import { pagesGenerator } from './page/index.mjs';
import { modalGenerator } from './modal/index.mjs';
import { componentGenerator } from './component/index.mjs';
import { ApiRouteGenerator } from './api-route/index.mjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default async function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setHelper('ifEquals', function (arg1, arg2, options) {
    return arg1 == arg2 ? options.fn(this) : options.inverse(this);
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

  plop.setGenerator('page', pagesGenerator);

  plop.setGenerator('api route', ApiRouteGenerator);

  plop.setGenerator('modal', modalGenerator);

  plop.setGenerator('component', componentGenerator);
}
