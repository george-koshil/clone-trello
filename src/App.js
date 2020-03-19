import React, { Component } from 'react';
import './App.css';
import Board from "./components/Board";
import {connect} from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);
        this.lists = this.props.lists;
    }

  render() {
    return (
        <div className='App-page'>
            <Board lists={this.lists}/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(App);


