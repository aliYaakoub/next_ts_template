/* eslint-disable @typescript-eslint/no-unused-vars */

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { cartSaga } from './saga';
import { ExampleState, Post } from './types';

export const initialState: ExampleState = {
  number: 0,
  post: null,
  isFetching: false,
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
    fetchData(state) {},
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    setData(state, action: PayloadAction<Post | null>) {
      state.post = action.payload;
    },
  },
});

export const { actions: cartActions } = slice;

export const useCartSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: cartSaga });
  return { actions: slice.actions };
};
