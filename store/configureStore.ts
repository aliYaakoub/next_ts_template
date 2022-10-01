/**
 * Create the store with dynamic reducers
 */

import {
  Action,
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
  ThunkAction,
  PayloadAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './reducers';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const { run: runSaga } = sagaMiddleware;

const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
] as StoreEnhancer[];

const middlewares = [sagaMiddleware];

const masterReducer = (state: any, action: PayloadAction) => {
  if (action.type === HYDRATE) {
    // return {
    //   ...state,
    //   example: action.payload,
    // };
    return state;
  } else {
    return createReducer();
  }
};

const store = () =>
  configureStore({
    reducer: masterReducer,
    middleware: [...customizedMiddleware, ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(store, { debug: true });
