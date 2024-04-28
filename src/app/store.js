import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import sweetReducer from "../features/sweet/sweetSlice";
import userReducer from "../features/users/userSlice";

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        sweet:sweetReducer,
        user:userReducer
    }
});

export default store;