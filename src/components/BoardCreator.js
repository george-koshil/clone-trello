import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import {createBoard} from "../actions";

function BoardCreator(props) {
    let [onBoardCreator, setOnBoardCreator] = useState(false);
    let [boardName, setBoardName] = useState('');

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
                      onChange={(e) => setBoardName(e.target.value)}
                  />
              </div>

              <div className='BoardCreatorButton'>
                  <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                          props.createBoard(boardName);
                          setBoardName('');
                          setOnBoardCreator(false);
                      }
                      }
                  >
                      Добавить
                  </Button>
              </div>

              <div className='BoardCreatorButtonClose'>
                  <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setOnBoardCreator(false)}
                  >
                      Отменить
                  </Button>
              </div>
          </div>
        );
    }
    return(
      <div className='BoardCreator' onClick={() => setOnBoardCreator(true)}>
          <div className='BoardCreatorTitle'>Создать доску</div>
      </div>
    );
}

const mapDispatchToProps = {
  createBoard
};

export default connect(null, mapDispatchToProps)(BoardCreator)