import fs from 'fs'

function pathExists(path) {
  return fs.existsSync(path);
}

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('component', {
    description: 'Add a component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What should it be called?',
      },
    ],
    actions: () => {
      
      const componentPath = `../../components/{{properCase componentName}}.tsx`;
      
      const actions = [
        {
          type: 'add',
          path: componentPath,
          templateFile: './component/index.tsx.hbs',
          abortOnFail: true,
        },
      ];
  
      return actions;
    },
  });

  plop.setGenerator('page', {
    description: 'Add a page',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What should it be called?',
      },
    ],
    actions: () => {

      const componentPath = `../../pages/{{dashCase componentName}}.tsx`;
      
      const actions = [
        {
          type: 'add',
          path: componentPath,
          templateFile: './page/index.tsx.hbs',
          abortOnFail: true,
        },
      ];
  
      return actions;
    },
  });
}
