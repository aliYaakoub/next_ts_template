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
      message:
        'Where do you want it to be created? (if you want it to be nested in another folder please create it before generating)',
      basePath: `${componentsBaseGeneratorPath}`,
    },
    {
      type: 'confirm',
      name: 'wantMemo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantTranslation',
      default: false,
      message: 'Do you want this page translated?',
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

    if (data.wantStyles || data.wantLoadable) {
      path = `${componentsBaseGeneratorPath}/${data.basePath}/{{properCase componentName}}`;

      actions.push({
        type: 'add',
        path: `${path}/index.tsx`,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
        skipIfExists: true,
      });

      if (data.wantStyles) {
        actions.push({
          type: 'add',
          path: `${path}/{{properCase componentName}}.module.css`,
          templateFile: './component/style.module.css.hbs',
          abortOnFail: true,
          skipIfExists: true,
        });
      }

      if (data.wantLoadable) {
        actions.push({
          type: 'add',
          path: `${path}/Loadable.ts`,
          templateFile: './component/Loadable.ts.hbs',
          abortOnFail: true,
          skipIfExists: true,
        });
      }
    } else {
      path = `${componentsBaseGeneratorPath}/${data.basePath}/{{properCase componentName}}.tsx`;

      actions.push({
        type: 'add',
        path: path,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
        skipIfExists: true,
      });
    }

    return actions;
  },
};
