import React, {useEffect} from 'react';
import './App.css';
import {connect} from "react-redux";
import {fetchBoards} from "./actions";
import {
    BrowserRouter as Router,
        Switch,
        Route
} from "react-router-dom";
import LogIn from "./components/LogIn";
import HomePage from "./components/HomePage";
import BoardsPage from "./components/BoardsPage";
import BoardsRoutes from "./components/BoardsRoutes";

function App(props) {
    useEffect(() =>  props.dispatch(fetchBoards()), []);
    return (
        <Router>
                <Switch>
                    <Route exact path='/' >
                        <HomePage/>
                    </Route>

                    <Route exact path='/login'>
                        <LogIn/>
                    </Route>

                    <Route path='/boards'>
                        <BoardsPage boards={props.boards}/>
                    </Route>

                    <BoardsRoutes boards={props.boards}/>
                </Switch>
        </Router>
    );
}

const mapStateToProps = state => ({
    boards: state.board.items
});

export default connect(mapStateToProps)(App);


