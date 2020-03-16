import React from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";

function TaskList() {
    return(
        <div className='TaskList'>
            <TaskListTitle title='Todo list'/>
            <hr />
            <Card text=' 1. First task'/>
        </div>
    )

}

export default TaskList