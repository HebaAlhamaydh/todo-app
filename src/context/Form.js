
import React, { useContext, useEffect, useState } from "react";
import { SettingsContext } from './settings'
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { Switch } from "@blueprintjs/core";



export default function Form() {
    const myContext=useContext(SettingsContext);

    const storeData = (e) => {
        e.preventDefault();
        // myContext.setShow(e.target.show.checked)
        console.log("hhhhhh");
        myContext.setPerPage(parseInt(e.target.value))
        console.log("cccccc", myContext.postsPerPage);

        localStorage.setItem("settings", JSON.stringify(myContext.postsPerPage));
    };

    function setItem(data) {
        
    }

    const handleClick = () => {
        myContext.setShow(!settings.show);

    }

    return (
        <>
            <form className="f" onSubmit={storeData} class="card1">
                <span>Input number of Items per Page:</span>
                <input onChange={(e) => { myContext.setPerPage(e.target.value) }} type="text" name="number" placeholder="Items per page" />
                <br></br>
                <br></br>
                <Switch checked={myContext.show} onClick={handleClick}>Display completed Items</Switch>
                <button type="submit"  >edit</button>
                {/* <button onClick={setItem} className='sortB'>Save Settings</button> */}
            </form>

        </>
    );
}