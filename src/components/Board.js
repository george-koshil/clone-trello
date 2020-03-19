import React from "react";
import TaskList from "./TaskList";
import TodoAppBar from "./TodoAppBar";



function Board({lists}) {
    return (
      <div>
         <TodoAppBar />
          {lists.map(list => (
              <TaskList key={list.id} cards={list.cards}/>
          ))}
      </div>
    );
}

export default Board




