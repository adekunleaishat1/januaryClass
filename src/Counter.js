import React,{useEffect} from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { increament, decreament } from './redux/Countslice'
import { getuser } from './Alluser'


const Counter = () => {
    const {value, isvalue} = useSelector(state=> state.Couslice)
    console.log(isvalue);
    const {alluser, fetchingerror, isfetching} = useSelector(state=>state.userslice)
    console.log(alluser);
    useEffect(() => {
            getuser(dispatch)
       console.log(alluser);
    }, [])
    
    const dispatch = useDispatch()
  return (
    <>
    <div>
      <h1>{value}</h1>
      <button onClick={()=>dispatch(increament())}>add</button>
      <button onClick={()=> dispatch(decreament())}>minus</button>
    </div>

    </>
  )
}

export default Counter