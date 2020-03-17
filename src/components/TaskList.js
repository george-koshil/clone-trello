import React from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";
import CardCreator from "./CardCreator";


function TaskList() {
    return(
        <div className='TaskList'>
            <TaskListTitle title='Today'/>
            <hr />
            <Card text='Create static component'/>
            <Card text="Go to Sanya's job and training" />
            <Card text='Kiss Alina and tell her how I love her' />
            <Card text='Listen to music' />
            <CardCreator/>
        </div>
    )

}

export default TaskList