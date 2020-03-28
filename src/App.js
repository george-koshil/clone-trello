import React, { Component } from 'react';
import './App.css';
import Board from "./components/Board";
import {connect} from "react-redux";
import BoardCreator from "./components/BoardCreator";
import TodoAppBar from "./components/TodoAppBar";
import BoardTile from "./components/BoardTile";

class App extends Component {
  render() {
    return (
        <div className='App-page'>
            <TodoAppBar/>
            <BoardCreator boards={this.props.boards}/>

            <div>
                {this.props.boards.map(board => {
                    return(
                        <BoardTile key={board.id} title={board.title} />
                    )
                })}
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    boards: state.boards
});

export default connect(mapStateToProps)(App);


