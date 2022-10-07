import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    incrementUsers: (state) => {
      state.value += 1;
    },
    decrementUsers: (state) => {
      state.value -= 1;
    },
    incrementUsersByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementUsers, decrementUsers, incrementUsersByAmount } =
  usersSlice.actions;

export default usersSlice.reducer;
