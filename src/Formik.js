import React,{useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Formik = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4567/User")
        .then((res)=>{
         console.log(res.data);
         setdata(res.data)
        }).catch((err)=>{
         console.log(err);
        })
    }, [])
    
    const formik = useFormik({
        initialValues:{
            email: "",
            password:"",
            username:""
        },
        validationSchema:yup.object({
            email:yup.string().email("must be a valid email").required("email is required"),
            password:yup.string().matches("^(?=.*[A-Za-z])(?=.*[#])[A-Za-z#]{8,}$").required("password is required"),
            username:yup.string().min(5, "username should be atleast 5 characters").required("username is required")
        }),
        onSubmit:(value)=>{
           console.log(value);
           const user = data.find(el=>el.email == value.email)
           if (user) {
            // alert("user already exist")
            toast.error("user already exist")
            formik.setValues({
                email: "",
                username: "",
                password:""
               })
           }else{
            try {
                axios.post("http://localhost:4567/User",value)
                .then((res)=>{
                 console.log(res);
                 toast.success("signed up successful")
                 formik.setValues({
                    email: "",
                    username: "",
                    password:""
                   })
                }).catch((err)=>{
                 console.log(err);
                 toast.error("error occur while signing up")
                 formik.setValues({
                    email: "",
                    username: "",
                    password:""
                   })
                })
               } catch (error) {
                console.log(error);
               }
           }

        }
    })
    console.log(formik.errors);
    console.log(formik.touched);
  return (
    <div>
        <form onSubmit={formik.handleSubmit} className='w-25 mx-auto bg-white' action="">
            <h1 className='text-muted'>Signup</h1>
            <div className='mt-3'>
               <div className='form-group mt-3'>
                  <label htmlFor="">Username</label>
                  <input onBlur={formik.handleBlur} value={formik.values.username} onChange={formik.handleChange} className='form-control' type="text" name="username" />
                  <p className='text-danger'>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p>
               </div>
               <div className='form-group mt-3'>
                  <label htmlFor="email">Email</label>
                  <input onBlur={formik.handleBlur}  value={formik.values.email}  onChange={formik.handleChange} className='form-control' type="text" name="email" />
                  <p className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p>
               </div>
               <div className='form-group mt-3'>
                  <label htmlFor="password">Password</label>
                  <input onBlur={formik.handleBlur} value={formik.values.password}  onChange={formik.handleChange} className='form-control' type="password" name="password" />
                  <p className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
               </div>
               <div className='mt-3'>
                 <button type='submit' className='btn  btn-primary'>Register</button>
                 <ToastContainer/>
               </div>
            </div>
        </form>
    </div>
  )
}

export default Formik