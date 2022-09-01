import { componentsBaseGeneratorPath } from '../paths.js';

export const componentGenerator = {
  description: 'Add a component',
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
      basePath: `${componentsBaseGeneratorPath}`,
    },
    {
      type: 'confirm',
      name: 'wantMemo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
  ],
  actions: (data) => {
    const path = `${componentsBaseGeneratorPath}/${data.basePath}/{{properCase componentName}}.tsx`;

    const actions = [
      {
        type: 'add',
        path: path,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
