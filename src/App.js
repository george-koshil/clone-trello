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

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchBoards());
    }

    render() {
    return (
        <Router>
                <Switch>
                    {this.props.boards.items.map(board => {
                        return(
                            <Route key={'route' + board.id} path={'/' + board.id.toString()}>
                                <Board key={'board' + board.id} board={board} />
                            </Route>
                            )

                    })}

                <Route exact path='/'>
                    <div className='App-page'>
                        <TodoAppBar/>
                        <BoardCreator boards={this.props.boards.items}/>
                        <div className='BoardTileBar'>
                            {this.props.boards.items.map(board => {
                                return(
                                    <Link key={'link' + board.id} to={'/' + board.id.toString()}>
                                        <BoardTile key={board.id} name={board.name} />
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
    boards: state.board,
    lists: state.list
});

export default connect(mapStateToProps)(App);


