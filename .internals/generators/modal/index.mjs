import { modalsBaseGeneratorPath } from '../paths.js';

export const modalGenerator = {
  description: 'Add a modal',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'What should it be called?',
    },
    {
      type: 'directory',
      name: 'basePath',
      message:
        'Where do you want it to be created? (if you want it to be nested in another folder please create it before generating)',
      basePath: `${modalsBaseGeneratorPath}`,
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
    {
      type: 'confirm',
      name: 'wantStyles',
      default: false,
      message: 'Do you want a css module for this component?',
    },
  ],
  actions: (data) => {
    let path = '';
    let actions = [];

    if (data.wantLoadable || data.wantStyles) {
      path = `${modalsBaseGeneratorPath}/${data.basePath}/{{properCase componentName}}`;

      actions.push({
        type: 'add',
        path: `${path}/index.tsx`,
        templateFile: './modal/index.tsx.hbs',
        abortOnFail: true,
        skipIfExists: true,
      });

      if (data.wantStyles) {
        actions.push({
          type: 'add',
          path: `${path}/{{properCase componentName}}.module.css`,
          templateFile: './modal/style.module.css.hbs',
          abortOnFail: true,
          skipIfExists: true,
        });
      }

      if (data.wantLoadable) {
        actions.push({
          type: 'add',
          path: `${path}/Loadable.ts`,
          templateFile: './modal/Loadable.ts.hbs',
          abortOnFail: true,
          skipIfExists: true,
        });
      }
    } else {
      path = `${modalsBaseGeneratorPath}/${data.basePath}/{{properCase componentName}}.tsx`;

      actions.push({
        type: 'add',
        path: path,
        templateFile: './modal/index.tsx.hbs',
        abortOnFail: true,
        skipIfExists: true,
      });
    }

    return actions;
  },
};
