import { combineReducers, configureStore } from '@reduxjs/toolkit';
import listenerMiddleware from './middleware';
import filmsReducer from './slices/Films';
import userReducer from './slices/User';
import filtersReducer from './slices/Filters';

const rootReducer = combineReducers({
  filmsStore: filmsReducer,
  userStore: userReducer,
  filtersStore: filtersReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([listenerMiddleware.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
