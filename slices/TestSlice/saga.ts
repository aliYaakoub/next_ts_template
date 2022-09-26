import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import { cartActions as actions } from '.';
import { selectNumber } from './selectors';

export function* addNumber(action: PayloadAction<number>) {
  yield put(actions.setNumber(action.payload));
}

export function* increaseNumberBy1() {
  const value: number = yield select(selectNumber);
  yield put(actions.setNumber(value + 1));
}

export function* decreaseNumberBy1() {
  const value: number = yield select(selectNumber);
  yield put(actions.setNumber(value - 1));
}

export function* increaseNumber() {
  yield takeLatest(actions.increase.type, increaseNumberBy1);
}
export function* decreaseNumber() {
  yield takeLatest(actions.decrease.type, decreaseNumberBy1);
}

export function* cartSaga() {
  yield all([call(increaseNumber), call(decreaseNumber)]);
}
