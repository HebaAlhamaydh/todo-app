import React from 'react';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import ToDo from './components/Todo/todo.js';
import '@blueprintjs/core/lib/css/blueprint.css';
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './app.css'
import Setting from './context/settings';
export default class App extends React.Component {
  render() {
    return (
        <>
        
        <Setting>
        <Header />
      <ToDo />
      <Footer />
      </Setting>
        </>
    );
  }
}