import React from 'react';
import { Navbar,Button,Alignment  } from '@blueprintjs/core';
import './header.scss'
function Header () {
 
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
    <button class="bp4-button bp4-minimal bp4-icon-user"></button>
    <button class="bp4-button bp4-minimal bp4-icon-notifications"></button>
    <button class="bp4-button bp4-minimal bp4-icon-cog"></button>
  </div>
</nav>
      </header>
    );
 
}

export default Header;



