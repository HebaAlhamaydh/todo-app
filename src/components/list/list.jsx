import React,{useContext} from 'react'
import './list.css'
import Auth from '../auth/auth';
import { Card, Elevation } from "@blueprintjs/core";
export default function List({item,toggleComplete,deleteItem}) {
  return (
    <>
    
    <Card  key={item.id} className="bp4-elevation-4" >
    <p>{item.text}</p>
    <p><small>Assigned to: {item.assignee}</small></p>
    <p><small>Difficulty: {item.difficulty}</small></p>
    <p><small>id: {item.id}</small></p>
    <Auth action="update">
    <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()} </div>
    </Auth>
    <br></br>
    <Auth action="delete">
    <button onClick={() => deleteItem(item.id)}>Delete Item</button>
    </Auth>
    <hr />
  </Card >
    
  
  
  </>
  )


  }
