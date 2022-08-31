import inquirer from 'inquirer';
import { createRequire } from 'module';
const require = createRequire(import.meta.url)
import { modalsBaseGeneratorPath } from '../paths.js';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export const modalGenerator = {
  description: 'Add a modal',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'What should it be called?',
    },
  ],
  actions: () => {

    const path = `${modalsBaseGeneratorPath}/{{properCase componentName}}.tsx`;

    const actions = [
      {
        type: 'add',
        path: path,
        templateFile: './modal/index.tsx.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
}