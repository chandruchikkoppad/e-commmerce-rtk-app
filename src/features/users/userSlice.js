import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:true,
    users:[],
    error:""
};
export const fetchUser=createAsyncThunk("user/fetchUser",()=>{
    return (axios.get("https://api.github.com/users").then(res=>res.data).catch(error=>error))
})
const userSlice=createSlice({
    name:"user",
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchUser.pending,state=>{
            state.loading=true
        }),
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false,
            state.users=action.payload,
            state.error=""
        }),
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.loading=false,
            state.users=[],
            state.error=action.error.message
        })
    }
})
export default userSlice.reducer;
