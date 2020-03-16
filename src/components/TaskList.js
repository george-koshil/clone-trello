import React from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";

function TaskList() {
    return(
        <div className='TaskList'>
            <TaskListTitle title='Todo list'/>
            <hr />
            <Card text='First task'/>
            <Card text='Second task' />
        </div>
    )

}

export default TaskList