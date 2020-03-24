import React from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";
import CardCreator from "./CardCreator";


function TaskList({cards, title}) {
    return(
        <div className='TaskList'>
            <TaskListTitle title={title}/>
            <hr />
            {cards.map(card => (
                <Card text={card.text} key={card.id} />
            ))}
            
            <CardCreator/>
        </div>
    )

}

export default TaskList