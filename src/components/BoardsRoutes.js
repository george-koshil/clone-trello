import {Route} from "react-router-dom";
import Board from "./Board";
import React from "react";

export default function BoardsRoutes(props) {
    return props.boards.map(board => {
            return(
                <Route key={'route' + board.id} path={'/' + board.id}>
                    <Board key={'board' + board.id} board={board} />
                </Route>
         )})
}
