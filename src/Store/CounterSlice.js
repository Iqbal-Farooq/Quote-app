import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
   incrementbyvalue : (state,action) => {
      state.value +=action.payload;
    },
    decreasebyvalue : (state,action) => {
      state.value -=action.payload;
    },
  },
});

export const { increment, decrement,incrementbyvalue,decreasebyvalue} = counterSlice.actions;
export default counterSlice;