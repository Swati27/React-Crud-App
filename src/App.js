import './App.css';

import React, { Component } from 'react';

import ListItems from './ListItems.js'
import logo from './logo.svg';

class App extends Component {
  
  

  // Submint adds to list
  // And delet button
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>TODO App</div>
        <ListItems/>
      </div>
    );
  }
}

export default App;
