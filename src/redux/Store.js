import { configureStore } from "@reduxjs/toolkit";
import Couslice from "./Countslice";
import  userslice from './Userslice'
export default configureStore({
    reducer:{
        Couslice,
        userslice
    }
})