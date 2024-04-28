import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState={
    numOfSweets:50
}
const sweetSlice=createSlice({
    name:"sweet",
    initialState,
    reducers:{
        ordered:state=>{
          state.numOfSweets--
        },
        restored:(state,action)=>{
          state.numOfSweets+=action.payload
        }
    },
    //   extraReducers: (builder) => {
    //     builder
    //       .addCase(cakeOrdered, (state) => {
    //         state.numOfSweets--;
    //       })}
    });
export default sweetSlice.reducer;
export const {ordered,restored}=sweetSlice.actions;