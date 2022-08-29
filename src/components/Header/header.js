import React from 'react';

import { Link } from 'react-router-dom';
import { LoginContext } from "../../context/login"
import {When} from 'react-if';
import { useContext } from 'react';
import './header.scss'
function Header () {
  const login=useContext(LoginContext);
    return (
      <header>
<nav class="bp4-navbar .modifier">
  <div class="bp4-navbar-group bp4-align-left">
    <div class="bp4-navbar-heading">ToDo App</div>
    <input class="bp4-input" placeholder="Search files..." type="text" />
  </div>
  <div class="bp4-navbar-group bp4-align-right">
 <button class="bp4-button bp4-minimal bp4-icon-home">Home</button>
    <button class="bp4-button bp4-minimal bp4-icon-document">Files</button>
    <span class="bp4-navbar-divider"></span>
    <When condition={login.loggedIn}>
    <button class="bp4-button bp4-minimal " className="link" onClick={login.logout}>Log out</button>
    </When>
    
    <button class="bp4-button bp4-minimal bp4-icon-notifications"></button>
    <button class="bp4-button bp4-minimal bp4-icon-cog"></button>
  </div>
</nav>
      </header>
    );
 
}

export default Header;



