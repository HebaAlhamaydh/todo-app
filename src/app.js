import React from 'react';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import ToDo from './components/Todo/todo.js';
import '@blueprintjs/core/lib/css/blueprint.css';
import './app.css'

export default class App extends React.Component {
  render() {
    return (
        <>
        
        {/* <SettingsContext> */}
        <Header />
      <ToDo />
      <Footer />
      {/* </SettingsContext> */}
        </>
    );
  }
}