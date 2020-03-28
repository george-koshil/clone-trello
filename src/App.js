import React, { Component } from 'react';
import './App.css';
import Board from "./components/Board";
import {connect} from "react-redux";
import BoardCreator from "./components/BoardCreator";
import TodoAppBar from "./components/TodoAppBar";
import BoardTile from "./components/BoardTile";
import {
    BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
                <Switch>
                    {this.props.boards.map(board => {
                        return(
                            <Route key={'route' + board.id} path={'/' + board.id.toString()}>
                                <Board key={'board' + board.id} lists={board.lists} />
                            </Route>
                            )

                    })}

                <Route exact path='/'>
                    <div className='App-page'>
                        <TodoAppBar/>
                        <BoardCreator boards={this.props.boards}/>
                        <div className='BoardTileBar'>
                            {this.props.boards.map(board => {
                                return(
                                    <Link key={'link' + board.id} to={'/' + board.id.toString()}>
                                        <BoardTile key={board.id} title={board.title} />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </Route>
                </Switch>
        </Router>
    );
  }
}

const mapStateToProps = state => ({
    boards: state.boards
});

export default connect(mapStateToProps)(App);


