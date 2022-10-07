import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

/* async storage */
//import AsyncStorage from '@react-native-community/async-storage';

import usersReducer from '../redux/users/usersSlice';
import eveReducer from '../redux/eve/eveSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducers = combineReducers({
  users: usersReducer,
  eve: eveReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
