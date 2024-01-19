import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
export const fetchquotes=createAsyncThunk("quotes/data",async()=>{
    try{
        let limit=1454;
        let res=await fetch(`https://dummyjson.com/quotes?limit=${limit}`);
        if(!res.ok){
            throw new Error("cant get data ")
        }
        const data=await res.json();
        return data;
    }catch(err){
        console.log(err);
        throw err;
    }
})
const initialstate={
    loading:false,
    quotesdata:[],
    error:false,
}
export const quoteSlice=createSlice({
    name:"quotes",
    initialState:initialstate,
    reducers:{
        addlikes:(state,action)=>{
            let index = state.quotesdata.findIndex((item) => item.id === action.payload);
            // console.log(index)
            state.quotesdata[index]={...state.quotesdata[index],likes:state.quotesdata[index].likes+1}
        },
        adddislikes:(state,action)=>{
            let index = state.quotesdata.findIndex((item) => item.id === action.payload);
            // console.log(index)
            state.quotesdata[index]={...state.quotesdata[index],dislikes:state.quotesdata[index].dislikes+1}

        },
        removeItem:(state,action)=>{
            state.quotesdata=state.quotesdata.filter((item)=>item.id !== action.payload);
        },
        insertnewdata:(state,action)=>{
            state.quotesdata=[action.payload,...state.quotesdata]
        }
    },
    extraReducers:(builder)=>{
      builder.addCase(fetchquotes.pending,(state,action)=>{
        // console.log('loading')
        state.loading=true;
        state.err=false; 
      })
      builder.addCase(fetchquotes.fulfilled, (state, action) => {
        // console.log('loaded');
        state.loading = false;
      
        state.quotesdata = action.payload.quotes.map((item) => {
          let time = new Date();
          let currentday = time.getDate();
          let month = time.getMonth();
          let currentYear = time.getFullYear();
          const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          let currentMonth = months[month];
          currentday += Math.floor(Math.random() * 30); 
          month += Math.floor(Math.random() * 12); 
          currentYear += Math.floor(Math.random() * 10); 
          let maxYearOffset = currentYear - 1900;
          currentYear -= Math.floor(Math.random() * (maxYearOffset + 1));   
          let likes=Math.floor(Math.random()*100);
          let disikes=Math.floor(Math.random()*50);
          return {
            ...item,
            likes: likes,
            dislikes: disikes,
            year: currentYear,
            month: months[month % 12], 
            day: currentday % 30 + 1, 
          };
        });
      });
      
      builder.addCase(fetchquotes.rejected,(state,action)=>{
        state.err=true;
      })
    }
})
export const {addlikes,adddislikes,removeItem,insertnewdata}=quoteSlice.actions