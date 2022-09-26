import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.example || initialState;

export const selectExample = createSelector([selectSlice], (state) => state);

// you get make a selector for each state value
export const selectNumber = createSelector(
  [selectSlice],
  (state) => state.number,
);
