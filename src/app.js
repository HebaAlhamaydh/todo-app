import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Pagination from "./components/pagination/Pagination";
import ToDo from './components/Todo/todo.js';
import '@blueprintjs/core/lib/css/blueprint.css';
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import Hestory from './history';
import './app.css'
import Setting from './context/settings';
export default function App (){
 
    return (
        <>
        <Header />
        <Setting>
       
        
      <BrowserRouter>
    <Routes>
    <Route path='/'      element={<ToDo />}/>
    <Route path='/hestory' element={<Hestory/>}/>
    </Routes>
    </BrowserRouter> 
    {/* <ToDo /> */}
     
      <Footer />
      </Setting>
     
        </>
    );
  
}