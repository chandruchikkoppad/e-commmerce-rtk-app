import { createSlice } from "@reduxjs/toolkit";
import { ordered as sweetOrdered} from "../sweet/sweetSlice";

const initialState = {
  numOfCakes: 10
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers:{
    ordered:state=>{
      state.numOfCakes--
    },
    restored:(state,action)=>{
      state.numOfCakes+=action.payload
    }
},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(sweetOrdered, (state) => {
  //       state.numOfCakes--;
  //     })}
});

export default cakeSlice.reducer;
export const { ordered, restored } = cakeSlice.actions;
