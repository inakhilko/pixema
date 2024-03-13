import { combineReducers, configureStore } from '@reduxjs/toolkit';
import listenerMiddleware from './middleware';
import filmsReducer from './slices/Films';

const rootReducer = combineReducers({
  filmsStore: filmsReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([listenerMiddleware.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
