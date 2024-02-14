import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value:0,
    isvalue: false
}

export const countslice = createSlice({
    name:"count",
    initialState,
    reducers:{
        increament:(state) =>{
            state.value += 1 
            state.isvalue = true
        },
        decreament:(state) =>{
            state.value -= 1
            state.isvalue = false
        }

    }

})

export const {increament, decreament} = countslice.actions
export default countslice.reducer