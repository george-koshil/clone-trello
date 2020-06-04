import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
        Switch,
        Route
} from "react-router-dom";
import LogIn from "./components/LogIn";
import HomePage from "./components/HomePage";
import BoardsPage from "./components/BoardsPage";
import BoardsRoutes from "./components/BoardsRoutes";

function App() {
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
                        <BoardsPage />
                    </Route>

                    <BoardsRoutes/>
                </Switch>
        </Router>
    );
}

export default App


