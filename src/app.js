import { BrowserRouter, Route,Link, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import LoginForm from './components/logiForm/loginForm.js';
import ToDo from './components/Todo/todo.js';
import '@blueprintjs/core/lib/css/blueprint.css';
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import History from './history';
import './app.css'
import Login, { LoginContext } from "./context/login.js";
import { When } from "react-if";
import Setting from './context/settings';


export default function App (){
 
    return (
        <>
        <Login>
        <Header />
        <LoginForm></LoginForm>
        <Setting>  
    <Routes>
    <Route path='/'      element={<ToDo />}/>
    <Route path='/history' element={<History/>}/>
    </Routes>
 
     </Setting>
      <Footer />
      </Login>
        </>
    );
  
}