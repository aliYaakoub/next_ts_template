import { modalsBaseGeneratorPath } from '../paths.js';

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
};
