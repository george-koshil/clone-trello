import React, { Component } from 'react';
import './App.css';
import Board from "./components/Board";
import {connect} from "react-redux";
import BoardCreator from "./components/BoardCreator";
import TodoAppBar from "./components/TodoAppBar";
import BoardTile from "./components/BoardTile";
import {fetchBoards} from "./actions";
import {
    BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";
import LogIn from "./components/LogIn";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchBoards());
    }

    render() {
    return (
        <Router>
                <Switch>
                    {this.props.boards.map(board => {
                        return(
                            <Route key={'route' + board.id} path={'/' + board.id.toString()}>
                                <Board key={'board' + board.id} board={board} />
                            </Route>
                            )

                    })}

                    <Route exact path='/' >
                        <LogIn/>
                    </Route>

                <Route path='/boards'>
                    <div className='App-page'>
                        <TodoAppBar/>
                        <div className='BoardTileBar'>
                            {this.props.boards.map(board => {
                                return(
                                    <Link key={'link' + board.id} to={'/' + board.id.toString()}>
                                        <BoardTile key={board.id} name={board.name} />
                                    </Link>
                                )
                            })}
                            <BoardCreator/>
                        </div>
                    </div>
                </Route>
                </Switch>
        </Router>
    );
  }
}

const mapStateToProps = state => ({
    boards: state.board.items
});

export default connect(mapStateToProps)(App);


