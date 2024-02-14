import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'font-awesome/css/font-awesome.min.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Http from './Http';
import Navbar from './Navbar';
import Notfound from './Notfound';
import Assignment from './Assignment';
import Dashboard from './Dashboard';
import Disptodo from './Disptodo';
import Posts from './Posts';
import Onepost from './Onepost';
import Formik from './Formik';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import Counter from './Counter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={ <App />}/>
        <Route path='/*' element={ <Notfound/>}/>
        <Route path='/http' element={ <Http/>}/>
        <Route path='/navbar' element={ <Navbar/>}/>
        <Route path='/formik' element={ <Formik/>}/>
        <Route path='/post' element={ <Posts/>}/>
        <Route path='/onepost/:id/:i' element={ <Onepost/>}/>
        <Route path='/counter' element={ <Counter/>}/>
        {/* <Route path='/student/dashboard' element={ <Navbar/>}/> */}
        <Route path='/student' element={<Dashboard/>}>
          <Route path='/student/profile' element={ <Assignment/>}/>
          <Route path='/student/disp' element={<Http/>}/>
        </Route>
      </Routes>
     
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
