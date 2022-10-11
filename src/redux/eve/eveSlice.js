import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const eveSlice = createSlice({
  name: 'eve',
  initialState,
  reducers: {
    getEvery: (state, { payload }) => {
      return {
        ...state,
        every: payload.id,
      };
    },
    incrementEve: (state) => {
      state.value += 1;
    },
    decrementEve: (state) => {
      state.value -= 1;
    },
    incrementEveByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getEvery, incrementEve, decrementEve, incrementEveByAmount } =
  eveSlice.actions;

export default eveSlice.reducer;
