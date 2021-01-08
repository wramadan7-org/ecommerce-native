import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducer';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(promiseMiddleware, logger),
  );
  const persistor = persistStore(store);
  return {store, persistor};
};
