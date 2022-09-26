/**
 * Container Generator
 */

import { sliceBaseGeneratorPath, rootStatePath } from '../paths.js';

export const SliceGenerator = {
  description: 'Add a redux toolkit slice',
  prompts: [
    {
      type: 'input',
      name: 'sliceName',
      message: 'What should it be called (automatically adds ...Slice postfix)',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
  ],
  actions: (data) => {
    const answers = data;

    const slicePath = `${sliceBaseGeneratorPath}/{{ properCase sliceName }}Slice`;

    const actions = [];

    actions.push({
      type: 'add',
      path: `${slicePath}/index.ts`,
      templateFile: './slice/index.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: `${slicePath}/selectors.ts`,
      templateFile: './slice/selectors.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: `${slicePath}/types.ts`,
      templateFile: './slice/types.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${rootStatePath}`,
      pattern: /(\/\/ COMPONENT IMPORTS)/g,
      templateFile: './slice/importContainerState.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${rootStatePath}`,
      pattern: /(\/\/ SLICE TYPE)/g,
      templateFile: './slice/appendRootState.hbs',
      abortOnFail: true,
    });
    if (answers.wantSaga) {
      actions.push({
        type: 'add',
        path: `${slicePath}/saga.ts`,
        templateFile: './slice/saga.ts.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
