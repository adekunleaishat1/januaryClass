import { createSlice } from "@reduxjs/toolkit";
export const userslice = createSlice({
    name:"user",
    initialState:{
        isfetching:false,
        alluser:[],
        fetchingerror:null
    },
    reducers:{
        Fetchinguser:(state) =>{
           state.isfetching = true
           state.alluser = []
           state.fetchingerror = null 
        },
        Fetchingsuccessful:(state, action) =>{
           state.isfetching = false
           state.alluser = action.payload
           state.fetchingerror = null
        },
        FetchingFailed:(state, action) =>{
            state.isfetching = false
           state.alluser = []
           state.fetchingerror = action.payload
        }
    }
})


export const {FetchingFailed, Fetchingsuccessful, Fetchinguser} = userslice.actions
export default userslice.reducer