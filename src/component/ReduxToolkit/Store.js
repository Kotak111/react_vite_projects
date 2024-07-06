import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../ReduxToolkit/CounterSlice"
export const Store = configureStore({
    reducer:{
        counter:counterReducer, 
    }
})