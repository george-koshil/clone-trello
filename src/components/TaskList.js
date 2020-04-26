import React from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";
import CardCreator from "./CardCreator";
import { Droppable } from 'react-beautiful-dnd'


function TaskList({cards, name,id, boardId}) {
    return(
        <div className='TaskList'>
            <TaskListTitle title={name}/>
            <hr />

            <Droppable droppableId={id}>
                {(provided) =>(
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {provided.placeholder}
                    </div>)}
            </Droppable>

            <CardCreator boardId={boardId} listId={id}/>
        </div>
    )

}

export default TaskList