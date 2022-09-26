import { ExampleState } from 'slices/TestSlice/types';
// COMPONENT IMPORTS

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {
  example?: ExampleState;
  // SLICE TYPE
}
