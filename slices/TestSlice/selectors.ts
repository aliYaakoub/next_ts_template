import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.example || initialState;

export const selectCart = createSelector([selectSlice], (state) => state);

export const selectNumber = createSelector(
  [selectSlice],
  (state) => state.number,
);
