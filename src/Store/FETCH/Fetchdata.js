import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          const data = await res.json();
          return data;
    }catch(err){
        console.log(err)
        throw err;
    }
  
 });
export const todoSlice =createSlice({
    name:'todo',
    initialState:{
        isLoading:false,
        data:[],
        isError:false,
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading=true;
            state.isError=false;

        })
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload
        })
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            state.isError=true;
        })
    }
})

export const {fetchdata}=todoSlice.actions;

