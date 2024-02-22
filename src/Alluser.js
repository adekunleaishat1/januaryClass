import { Fetchinguser, FetchingFailed, Fetchingsuccessful } from "./redux/Userslice"

import axios from "axios"

export const getuser = (dispatch) =>{
    dispatch(Fetchinguser())
    axios.get('http://localhost:4567/User')
    .then((res)=>{
        dispatch(Fetchingsuccessful(res.data))
        console.log(res);
    }).catch((err)=>{
        console.log(err);
        dispatch(FetchingFailed(err.message))
    })
}