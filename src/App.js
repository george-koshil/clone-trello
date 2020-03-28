import React, { Component } from 'react';
import './App.css';
import Board from "./components/Board";
import {connect} from "react-redux";
import BoardCreator from "./components/BoardCreator";
import TodoAppBar from "./components/TodoAppBar";

class App extends Component {
  render() {
    return (
        <div className='App-page'>
            <BoardCreator boards={this.props.boards}/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    boards: state.boards
});

export default connect(mapStateToProps)(App);


