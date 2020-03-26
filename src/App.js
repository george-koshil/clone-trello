import React, { Component } from 'react';
import './App.css';
import Board from "./components/Board";
import {connect} from "react-redux";

class App extends Component {
  render() {
    return (
        <div className='App-page'>
            <Board lists={this.props.lists}/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(App);


