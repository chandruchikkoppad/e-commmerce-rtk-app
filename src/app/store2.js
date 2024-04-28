import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features2/productSlice";
import cartSlice from "../features2/cartSlice";

const store2=configureStore({
    reducer:{
        products:productSlice,
        cart:cartSlice
    }
});
export default store2;