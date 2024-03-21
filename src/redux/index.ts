/* eslint-disable @typescript-eslint/ban-ts-comment */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import listenerMiddleware from './middleware';
import filmsReducer from './slices/Films';
import userReducer from './slices/User';
import filtersReducer from './slices/Filters';

const persistConfig = {
  key: 'root',
  storage,
};

// @ts-ignore
const rootReducer = combineReducers({
  filmsStore: filmsReducer,
  userStore: userReducer,
  filtersStore: filtersReducer,
});

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

// @ts-ignore
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware()
      .concat([listenerMiddleware.middleware])
  ),
});
export const persistor = persistStore(store);

// @ts-ignore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
