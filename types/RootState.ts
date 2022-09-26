// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { ExampleState } from 'Slices/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {
  example?: ExampleState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
