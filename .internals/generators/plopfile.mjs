import { componentGenerator } from './component/index.mjs';
import { pagesGenerator } from './page/index.mjs';

export default async function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
  ) {

    plop.setHelper('ifEquals', function (arg1, arg2, options) {
      return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });
    
    plop.setGenerator('component', componentGenerator);
  
    plop.setGenerator('page', pagesGenerator);
};
