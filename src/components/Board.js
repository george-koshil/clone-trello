import TaskList from "./TaskList";
import TodoAppBar from "./TodoAppBar";
import AddListButton from "./AddListButton";
import React, {useEffect} from "react";
import {fetchLists} from "../actions";
import {connect} from "react-redux";

function Board(props) {
    useEffect(() => props.dispatch(fetchLists(props.board.id)), []);

    return (
        <div>
            <div>
                <TodoAppBar/>
                    <div className='Board'>
                        {props.lists.map((list, index) => {
                           if(list.idBoard === props.board.id) {
                                return <TaskList
                                   key={index}
                                   name={list.name}
                                   boardId={list.idBoard}
                                   idList={list.id}
                               />
                           }
                        })}
                        <AddListButton idBoard={props.board.id}/>
                    </div>
                </div>

        </div>

    )
}

const mapStateToProps = store => {
    return {
        lists: store.list.items
    }
};


export default connect(mapStateToProps)(Board)




