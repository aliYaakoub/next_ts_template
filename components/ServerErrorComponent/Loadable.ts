/**
 *
 *
 *      Asynchronously loads the component for ServerErrorComponent
 *
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ServerErrorComponent = lazyLoad(
  () => import('./index'),
  module => module.default,
);
