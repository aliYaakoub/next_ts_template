import { apiRouteBaseGeneratorPath, pagesBaseGeneratorPath } from '../paths.js';

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
      message:
        'Where do you want it to be created? (if you want it to be nested in another folder please create it before generating)',
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
      type: 'confirm',
      name: 'wantTranslation',
      default: false,
      message: 'Do you want this page translated?',
    },
    {
      type: 'confirm',
      name: 'wantAForm',
      default: false,
      message: 'Are you using a form in this page?',
    },
    {
      type: 'confirm',
      name: 'usingAnInsideApiRoute',
      default: false,
      message: 'Are you using an inside api in this form?',
      when: (data) => data.wantAForm,
    },
    {
      type: 'file-tree-selection',
      name: 'apiName',
      root: `${apiRouteBaseGeneratorPath}`,
      message: 'Select the api route you want to use',
      when: (data) => data.usingAnInsideApiRoute,
    },
    {
      type: 'list',
      name: 'dataFetchingMethod',
      default: 'none',
      choices: [
        {
          name: 'None (you dont need to fetch data)',
          value: 'none',
        },
        {
          name: 'Server Side Rendering (SSR)',
          value: 'SSR',
        },
        {
          name: 'Static Site Generation (SSG)',
          value: 'SSG',
        },
        {
          name: 'react-query',
          value: 'react-query',
        },
        {
          name: 'Static Site Generation (SSG) && react-query',
          value: 'react-query&&SSG',
        },
        {
          name: 'Server Side Rendering (SSR) && react-query',
          value: 'react-query&&SSR',
        },
      ],
      message: 'How do you want to fetch data ?',
    },
  ],
  actions: (data) => {
    const path = data.isDynamic
      ? `${pagesBaseGeneratorPath}/${data.basePath}/[{{dashCase componentName}}].tsx`
      : `${pagesBaseGeneratorPath}/${data.basePath}/{{dashCase componentName}}.tsx`;

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
        skipIfExists: true,
      });
    }

    if (data.wantAForm) {
      actions.push({
        type: 'add',
        path: '../../config/yupSchemas/{{properCase componentName}}Schema.ts',
        templateFile: './page/yup.ts.hbs',
        abortOnFail: true,
        skipIfExists: true,
      });
    }

    return actions;
  },
};
