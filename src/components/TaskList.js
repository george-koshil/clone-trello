import React from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";
import CardCreator from "./CardCreator";


function TaskList() {
    return(
        <div className='TaskList'>
            <TaskListTitle title='Today'/>
            <hr />
            
            <CardCreator/>
        </div>
    )

}

export default TaskList