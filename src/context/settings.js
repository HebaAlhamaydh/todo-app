import React,{useState} from 'react';

 export const SettingsContext = React.createContext()

 export default function Setting (props){
    const [show,setShow]=useState(true)
    const [itemPage,setItemPage]=useState(4)
    const [sortBy,setSortBy] = useState("difficulty");
    const state = {
         show,
        itemPage,
        setShow,
        setItemPage,
        sortBy,
        setSortBy

    }
return (

<SettingsContext.Provider value={state}>

    {props.children}
</SettingsContext.Provider>

)

 }