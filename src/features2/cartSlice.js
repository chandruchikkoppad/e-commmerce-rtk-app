import { createSlice } from "@reduxjs/toolkit";

// const initialState=[]

// const cartSlice= createSlice({
//     name:"cart",
//     initialState,
//     reducers:{
//         add:(state,action)=>{
//             state.push(action.payload)
//         },
//         remove:(state,action)=>{
//             return state=state.filter(data=>data.id!==action.payload)
//         }
//     }
// });

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const newState = [...state, action.payload];
            localStorage.setItem("cart", JSON.stringify(newState));
            return newState;
        },
        remove: (state, action) => {
            const newState = state.filter(data => data.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(newState));
            return newState;
        },
    },
});

export default cartSlice.reducer;
export const {add,remove}=cartSlice.actions;
