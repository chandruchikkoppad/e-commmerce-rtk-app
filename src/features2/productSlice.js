import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:true,
    products:[],
    error:""
};

export const fetchProducts=createAsyncThunk("product/fetchProducts",()=>{
    return (axios.get("https://fakestoreapi.com/products").then(res=>res.data).catch(error=>error))
});  

const productSlice=createSlice({
    name:"products",
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        }),
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.loading=false,
            state.products=action.payload,
            state.error=""
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false,
            state.products=[],
            state.error=action.error.message
        })
    }
})

export default productSlice.reducer;