/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { cartSaga } from './saga';
import { ExampleState } from './types';

export const initialState: ExampleState = {
  number: 0,
};

const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increase(state) {
      state.number += 1;
    },
    decrease(state) {
      state.number -= 1;
    },
  },
});

export const { actions: cartActions } = slice;

export const useCartSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: cartSaga });
  return { actions: slice.actions };
};
