import React, { Component } from 'react';
import './App.css';
import Board from "./components/Board";

class App extends Component {
  render() {
    return (
        <div className='App-page'>
            <Board/>
        </div>
    );
  }
}

export default App;


