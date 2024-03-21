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

const rootReducer = combineReducers({
  filmsStore: filmsReducer,
  userStore: userReducer,
  filtersStore: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([listenerMiddleware.middleware]),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
