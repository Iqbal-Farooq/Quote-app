import {configureStore} from "@reduxjs/toolkit";
import { quoteSlice } from "./Slices/FetchQuotes";

export const store=configureStore({
    reducer:{
        quotes:quoteSlice.reducer
    }
})
