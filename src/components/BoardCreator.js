import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import store from "../store";
import {addBoard} from "../actions";


function BoardCreator({boards}) {
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
                          store.dispatch(addBoard(boardName));
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

export default BoardCreator