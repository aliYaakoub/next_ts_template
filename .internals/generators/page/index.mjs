import inquirer from 'inquirer';
import { createRequire } from 'module';
const require = createRequire(import.meta.url)
import { pagesBaseGeneratorPath } from '../paths.js';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export const pagesGenerator = {
  description: 'Add a page',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'What should it be called?',
    },
    {
      type: 'directory',
      name: 'basePath',
      message: 'Where do you want it to be created?',
      basePath: `${pagesBaseGeneratorPath}`,
    },
    {
      type: 'confirm',
      name: 'wantStyles',
      default: false,
      message: 'Do you want a css module for this page?',
    },
    {
      type: 'confirm',
      name: 'isDynamic',
      default: false,
      message: 'Is this Route Dynamic? (example: /[id].tsx)',
    },
    {
      type: 'list',
      name: 'renderingStyle',
      default: 'SSR',
      choices: [{
        name: 'Server Side Rendering (SSR)',
        value: 'SSR',
      },
      {
        name: 'Static Site Generation (SSG)',
        value: 'SSG',
      }],
      message: 'Do you want to use SSR or SSG ?',
    },
  ],
  actions: (data) => {

    const path = data.isDynamic ? `${pagesBaseGeneratorPath}/${data.basePath}/[{{dashCase componentName}}].tsx` : `${pagesBaseGeneratorPath}/${data.basePath}/{{dashCase componentName}}.tsx`;

    const actions = [
      {
        type: 'add',
        path: path,
        templateFile: './page/index.tsx.hbs',
        abortOnFail: true,
      },
    ];

    if (data.wantStyles) {
      actions.push({
        type: 'add',
        path: '../../styles/{{properCase componentName}}.module.css',
        templateFile: './page/style.module.css.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
}