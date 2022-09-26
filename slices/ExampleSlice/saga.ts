import { call, put, takeLatest, all } from 'redux-saga/effects';
import { cartActions as actions } from '.';

async function fetchPost() {
  const id = Math.ceil(Math.random() * 100);
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  ).then((res) => res.json());
  return { data };
}

export function* fetchPostData() {
  yield put(actions.setIsFetching(true));
  try {
    const { data } = yield call(fetchPost);
    yield put(actions.setData(data));
    yield put(actions.setIsFetching(false));
  } catch (err: any) {
    console.error(err.message);
  }
}

export function* fetchData() {
  yield takeLatest(actions.fetchData.type, fetchPostData);
}

export function* cartSaga() {
  yield all([call(fetchData)]);
}
