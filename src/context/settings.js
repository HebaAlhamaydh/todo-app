import React, {  useEffect,useState } from "react";
export const SettingsContext = React.createContext()

// const API = `https://hiservice.herokuapp.com`

export default function Setting (props){
    ////login cookies///
    // const [loginStatus, setLoginStatus] = useState(false);
    // const [user, setUser] = useState({
    //     username: cookie.load('username') || "",
    //     actions: cookie.load('actions') || []
    // });
    /////////////
    const [show,setShow]=useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage,setPerPage] = useState(3);
    const [sortBy,setSortBy] = useState("difficulty");
    const [list, setList] = useState([]);
    const state = {
        list,
        setList,
        show,
        setShow,
        currentPage,
        setCurrentPage,
        postsPerPage,
        setPerPage,
        sortBy,
        setSortBy

    }
    // useEffect(()=>{
    //     let data = JSON.parse(localStorage.getItem("settings"));
    //     if(data){
    //         setShow(data.show);
    //         setCurrentPage(data.currentPage);
    //         setSortBy(data.sortBy);
    //         setPerPage(data.postsPerPage);
    //     }
       
    // },[])
return (

<SettingsContext.Provider value={state}>
    {props.children}
</SettingsContext.Provider>

)

}