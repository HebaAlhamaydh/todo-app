import React, { useState } from "react";
export const SettingsContext = React.createContext()
export default function Setting (props){
    const [show,setShow]=useState(true)
    const [itemPage,setItemPage]=useState(4)
    const [sortBy,setSortBy] = useState("difficulty");
    const [list, setList] = useState([]);
    const state = {
        list,
        setList,
        show,
        itemPage,
        setShow,
        setItemPage,
        sortBy,
        setSortBy

    }
    // useEffect(()=>{
    //     let data = JSON.parse(localStorage.getItem("settings"));
    //     if(data){
    //          setDisplay(data.display);
    //          setItemPage(data.itemPage);
    //          setSortBy(data.sortBy);
    //     }
       
    // },[])
return (

<SettingsContext.Provider value={state}>
    {props.children}
</SettingsContext.Provider>

)

}