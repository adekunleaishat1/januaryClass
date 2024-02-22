import axios from "axios"
import { useEffect } from "react"
import { Fetchinguser, FetchingFailed, Fetchingsuccessful } from "./redux/Userslice"
import { useDispatch, useSelector } from "react-redux"
import { getuser } from "./Alluser"


const Users = () => {
    const dispatch = useDispatch()
    const {alluser, fetchingerror, isfetching} = useSelector(state=>state.userslice)
    console.log(alluser);
    useEffect(() => {
        getuser(dispatch)
        // dispatch(Fetchinguser())
        // axios.get('http://localhost:4567/User')
        // .then((res)=>{
        //     dispatch(Fetchingsuccessful(res.data))
        //     console.log(res);
        // }).catch((err)=>{
        //     console.log(err);
        //     dispatch(FetchingFailed(err.message))
        // })
        
      
    }, [])
    
  return (
    <div>

    </div>
  )
}

export default Users