import React, { useContext } from 'react'
import  {SettingsContext} from './context/settings'
import { Button, Card, Elevation } from "@blueprintjs/core";
export default function Hestory() {
  const myContext=useContext(SettingsContext);
  //  const data =()=>(list.map((element, index) => {
  //   if (element % 2 === 0) {
  //     return <h2 key={index}>{element}</h2>;
  //   }
  return (
    <div>
    {myContext.list.map(item => (
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