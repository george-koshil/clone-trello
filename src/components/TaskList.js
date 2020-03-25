import React from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";
import CardCreator from "./CardCreator";
import { Droppable } from 'react-beautiful-dnd'


function TaskList({cards, title,id}) {
    return(
        <div className='TaskList'>
            <TaskListTitle title={title}/>
            <hr />

            <Droppable droppableId={id}>
                {(provided) =>(
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {cards.map((card,index) => (
                            <Card text={card.text} key={card.id} id={card.id} index={index}/>
                        ))}
                        {provided.placeholder}
                    </div>)}
            </Droppable>

            <CardCreator listId={id}/>
        </div>
    )

}

export default TaskList