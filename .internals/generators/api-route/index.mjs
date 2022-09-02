import { apiRouteBaseGeneratorPath } from '../paths.js';

export const ApiRouteGenerator = {
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
      basePath: `${apiRouteBaseGeneratorPath}`,
    },
    {
      type: 'confirm',
      name: 'isDynamic',
      default: false,
      message: 'Is this Route Dynamic? (example: /[id].ts)',
    },
    {
      type: 'checkbox',
      name: 'method',
      default: 'GET',
      choices: ['GET', 'POST', 'DELETE', 'PUT'],
      message: 'What methods is this route supporting ?',
    },
  ],
  actions: (data) => {
    const path = data.isDynamic
      ? `${apiRouteBaseGeneratorPath}/${data.basePath}/[{{properCase componentName}}].ts`
      : `${apiRouteBaseGeneratorPath}/${data.basePath}/{{dashCase componentName}}.ts`;

    const actions = [
      {
        type: 'add',
        path: path,
        templateFile: './api-route/index.tsx.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
    ];

    return actions;
  },
};
