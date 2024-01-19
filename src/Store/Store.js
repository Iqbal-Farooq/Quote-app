import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './CounterSlice';
import ProductsSlce from './ProductsSlice';
import { todoSlice } from './FETCH/Fetchdata';
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    products:ProductsSlce.reducer,
    fetchdummydata:todoSlice.reducer,
  },
});