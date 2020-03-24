import React from "react";
import TaskList from "./TaskList";
import TodoAppBar from "./TodoAppBar";



function Board({lists}) {
    return (
        <div>
            <TodoAppBar />
            <div className='Board'>
                {lists.map(list => (
                    <TaskList key={list.id} cards={list.cards} title={list.title}/>
                ))}
            </div>

        </div>
    )
}

export default Board




