import React from "react";
import Button from '@material-ui/core/Button';
import TaskList from "./TaskList";


function Board() {
    return (
      <div>
          <Button variant="contained" color="primary">
              Board name
          </Button>

          <TaskList/>

          <div>List Creator</div>
      </div>
    );
}

export default Board




