// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const pagesBaseGeneratorPath = path.join(__dirname, '../../pages');
const componentsBaseGeneratorPath = path.join(__dirname, '../../components');

module.exports = {
  pagesBaseGeneratorPath,
  componentsBaseGeneratorPath,
};