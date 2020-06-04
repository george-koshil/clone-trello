import React, {useEffect} from "react";
import TodoAppBar from "./TodoAppBar";
import {Link} from "react-router-dom";
import BoardTile from "./BoardTile";
import BoardCreator from "./BoardCreator";
import {connect} from "react-redux";
import {fetchBoards} from "../actions";


function BoardsPage(props) {
    const { dispatch, boards, isLoggedIn} = props;

    useEffect(() =>  {
        dispatch(fetchBoards())
    }, [dispatch]);

    return(
        <div className='App-page'>
            <TodoAppBar isLoggedIn={isLoggedIn}/>
            <div className='BoardTileBar'>
                {boards.map(board => {
                    return(
                        <Link key={board.id} to={'/' + board.id}>
                            <BoardTile  name={board.name} idBoard={board.id}/>
                        </Link>
                    )
                })}
                <BoardCreator/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    boards: state.board.items,
    isLoggedIn: state.login.isLoggedIn
});

export default connect(mapStateToProps)(BoardsPage);
