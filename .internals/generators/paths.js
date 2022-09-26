// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const pagesBaseGeneratorPath = path.join(__dirname, '../../pages');
const componentsBaseGeneratorPath = path.join(__dirname, '../../components');
const modalsBaseGeneratorPath = path.join(__dirname, '../../components/modals');
const apiRouteBaseGeneratorPath = path.join(__dirname, '../../pages/api');
const sliceBaseGeneratorPath = path.join(__dirname, '../../slices');
const rootStatePath = path.join(__dirname, '../../types/RootState.ts');

module.exports = {
  pagesBaseGeneratorPath,
  componentsBaseGeneratorPath,
  modalsBaseGeneratorPath,
  apiRouteBaseGeneratorPath,
  sliceBaseGeneratorPath,
  rootStatePath,
};
