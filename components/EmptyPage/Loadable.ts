/**
 *
 *
 *      Asynchronously loads the component for EmptyPage
 *
 *
 */

import { lazyLoad } from 'utils/loadable';

export const EmptyPage = lazyLoad(
  () => import('./index'),
  module => module.default,
);
