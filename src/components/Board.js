import React from "react";
import TaskList from "./TaskList";
import TodoAppBar from "./TodoAppBar";



function Board() {
    return (
      <div>
         <TodoAppBar />
          <TaskList/>
      </div>
    );
}

export default Board




