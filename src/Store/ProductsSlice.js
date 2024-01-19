import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialstae=[]
const ProductsSlce=createSlice({
    name:"productsSlice",
    initialState:initialstae,
    reducers:{
        pushdata:(state,action)=>{
            state.push(action.payload)
            console.log("data pushed to array");
        }
        
    }

})
export const {pushdata}=ProductsSlce.actions;
export default ProductsSlce;