import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./todo"
const store=configureStore({
    reducer:{
        todo:myReducer
    }
})
export default store;