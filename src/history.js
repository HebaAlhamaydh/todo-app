import React, { useContext } from 'react'
import {  Card, Switch} from "@blueprintjs/core";
const LOCAL_STORAGE_KEY = "react-todo-list-todos";
export default function History() {

  const myContext= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  
  return (
    <div>
    


    {myContext.map(item => (
      item.complete?
        <Card key={item.id} className="bp4-elevation-4">
        <p>{item.text}</p>
        <p><small>Assigned to: {item.assignee}</small></p>
        <p><small>Difficulty: {item.difficulty}</small></p>
        <hr />
        </Card>
      :null
        ))}</div>
  )
}