import React, {useContext,useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import {SettingsContext} from '../../context/settings'
import Pagination from "../pagination/Pagination";
import ReactPaginate from 'react-paginate';
import { Switch, Button, Card, Elevation } from "@blueprintjs/core";
import { v4 as uuid } from 'uuid';
import List from "../list/list.jsx"
import { Link } from 'react-router-dom';
import "./todo.css";

const ToDo = () => {

  // const [currentItems, setCurrentItems] = useState([]);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);


  const myContext=useContext(SettingsContext);

  const [defaultValues] = useState({difficulty: 4,});
  // const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    item.show=true;
    console.log(item);
    myContext.setList([...myContext.list, item]);
  }

  function deleteItem(id) {
    const items = myContext.list.filter( item => item.id !== id );
    myContext.setList(items);
  }

  function toggleComplete(id) {
    const items = myContext.list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
        item.show=! item.show;
      }
      return item;
    });

    myContext.setList(items);

  }
  function showCompleted(){
    const items = myContext.list.map( item => {
     if(item.complete){
      return item;
     }
     
    });
  
    return items;
 
  }

  useEffect(() => {
    myContext.list.sort((a,b) => (a.difficulty > b.difficulty) ? 1 : ((b.difficulty > a.difficulty) ? -1 : 0));
    let incompleteCount = myContext.list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do myContext.List: ${incomplete}`;
  }, [myContext.list]);

  return (
    <>
   
    <header>
        <h1>To Do List: {incomplete.length} items pending</h1>
        <Link to='/hestory'>COMPLETED</Link>
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
  <button type="submit" calss="button">Add Item</button>
</label>
<Switch checked={false} label="hhhhh" onChange={showCompleted} />
</form>
    {
     myContext.list.map((item,idx)=>(
      <>
       <List key={idx} item={item} toggleComplete={toggleComplete} deleteItem={deleteItem}/>
      
      </>
      ))
      }
       {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
  
    </>
    
  );
};

export default ToDo;