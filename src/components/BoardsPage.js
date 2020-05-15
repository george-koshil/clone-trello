import React from "react";
import TodoAppBar from "./TodoAppBar";
import {Link} from "react-router-dom";
import BoardTile from "./BoardTile";
import BoardCreator from "./BoardCreator";

export default function BoardsPage(props) {
    return(
        <div className='App-page'>
            <TodoAppBar/>
            <div className='BoardTileBar'>
                {props.boards.map(board => {
                    return(
                        <Link key={'link' + board.id} to={'/' + board.id}>
                            <BoardTile key={board.id} name={board.name} />
                        </Link>
                    )
                })}
                <BoardCreator/>
            </div>
        </div>
    )
}