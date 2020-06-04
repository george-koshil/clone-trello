import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import {createBoard} from "../actions";

function BoardCreator(props) {
    const { createBoard } = props;
    let [onBoardCreator, setOnBoardCreator] = useState(false);
    let [boardName, setBoardName] = useState('');

    function openBoardCreator() {
        setOnBoardCreator(true);
    }

    function closeBoardCreator() {
        setOnBoardCreator(true);
    }

    function setName(e) {
        setBoardName(e.target.value);
    }

    function addNewBoard() {
        createBoard(boardName);
        setBoardName('');
        setOnBoardCreator(false);
    }

    if(onBoardCreator) {
        return(
          <div className='FormBoardCreator'>
              <div className='FormBoardTitle'>Создание доски</div>

              <div className='BoardCreatorTextField'>
                  <TextField
                      id="outlined-textarea"
                      value={boardName}
                      multiline
                      variant="outlined"
                      fullWidth={true}
                      size='medium'
                      autoFocus={true}
                      onChange={setName}
                  />
              </div>

              <div className='BoardCreatorButton'>
                  <Button
                      variant="contained"
                      color="primary"
                      onClick={addNewBoard}
                  >
                      Добавить
                  </Button>
              </div>

              <div className='BoardCreatorButtonClose'>
                  <Button
                      variant="contained"
                      color="primary"
                      onClick={closeBoardCreator}
                  >
                      Отменить
                  </Button>
              </div>
          </div>
        );
    }
    return(
      <div className='BoardCreator' onClick={openBoardCreator}>
          <div className='BoardCreatorTitle'>Создать доску</div>
      </div>
    );
}

const mapDispatchToProps = {
  createBoard
};

export default connect(null, mapDispatchToProps)(BoardCreator)