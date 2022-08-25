import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { Button, Card, Elevation } from "@blueprintjs/core";
import { v4 as uuid } from 'uuid';
import "./todo.scss";

const ToDo = () => {

  const [defaultValues] = useState({difficulty: 4,});
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete.length}`;
  }, [list]);

  return (
    <>
   
    <header>
        <h1>To Do List: {incomplete.length} items pending</h1>
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
</form>
{/* {if(list<)} */}
      {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <Button onClick={() => deleteItem(item.id)}>Delete Item</Button>
          <hr />
        </div>
      ))}
     


{/* <List list={list} toggleComplete={toggleComplete}deleteItem={deleteItem}/> */}




    </>
  );
};

export default ToDo;