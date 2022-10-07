import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../redux/users/usersSlice';
import eveReducer from '../redux/eve/eveSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    eve: eveReducer,
  },
});

export default store;
