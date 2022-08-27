import React, {useContext,useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import {SettingsContext} from '../../context/settings'
import Pagination from "../pagination/Pagination"
// import Pagination from "../pagination/Pagination";
// import ReactPaginate from 'react-paginate';
import { Switch, Button, Card, Elevation } from "@blueprintjs/core";
import { v4 as uuid } from 'uuid';
import List from "../list/list.jsx"
import { Link } from 'react-router-dom';
import "./todo.css";
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const ToDo = () => {

  const [todos, setTodos] = useState([]);

  const myContext=useContext(SettingsContext);

  const [defaultValues] = useState({difficulty: 4,});
  // const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
 
//////////////////////////////pagination
  const [currentPage, setCurrentPage] = useState(1); 
const [recordsPerPage,setrecordsPerPage] = useState(4);
const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
const currentRecords = todos.slice(indexOfFirstRecord, indexOfLastRecord);
const paginate = pageNumber => setCurrentPage(pageNumber);
//////////////////////////////////  

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
     item.show=true;
    myContext.setList([...myContext.list, item]);
    setTodos([item, ...todos]);
  }

  function deleteItem(id) {
    // const items = myContext.list.filter( item => item.id !== id );
    // myContext.setList(items);
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleComplete(id) {
    const items = todos.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
        // / item.show=! item.show;
      }
      
      return item;
    });
    // myContext.setList(items);
    setTodos(items);
  }



  function showCompleted(){
 myContext.setShow(!show)
  }

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            if (storageTodos.length > 0) {
              
                setTodos(storageTodos);
            }
        }
    myContext.list.sort((a,b) => (a.difficulty > b.difficulty) ? 1 : ((b.difficulty > a.difficulty) ? -1 : 0));
    let incompleteCount = myContext.list.filter(item => !item.complete);
    setIncomplete(incompleteCount);
    document.title = `To Do myContext.List: ${incomplete.length}`;
  }, []);
  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);



  return (
    <>
   
    <header>
        <h1>To Do List: {incomplete.length} items pending</h1>
        <h2><Link to='/hestory'>PRESS HERE TO DISPLAY COMPLETED ITEMS</Link></h2>
      </header>
     
 <form onSubmit={handleSubmit} class="card" >

<h2 class="add">Add To Do Item</h2>

<label>
  <span >To Do Item</span>
  <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
</label>

<label>
  <span>Assigned To</span>
  <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
</label>

<label>
  <span>Difficulty</span>
  <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
</label>
<label>
  <span>Difficulty</span>
  <input onChange={(e)=>{setrecordsPerPage(e.target.value)}} type="text"  name="number" />
</label>
<div calss="wrapper">
  <button type="submit" >Add Item</button>
</div>
<Switch checked={myContext.show} onChange={showCompleted}>Display completed Items</Switch>
{/* <button className='show' onClick={showCompleted}>{myContext.show ? 'Show Completed Items' : 'Hide Completed Items'}</button> */}

</form>
<div className='list'>
    {
    currentRecords.map((item,idx)=>(
      
      //  item.complete?
      //     null:
       <List key={idx} item={item} toggleComplete={toggleComplete} deleteItem={deleteItem} />
      
      ))
      
      }
    </div>   
   
        <Pagination recordsPerPage={recordsPerPage}
          totalPosts={todos.length}
          paginate={paginate} />
    
    </>
    
  );
};

export default ToDo;