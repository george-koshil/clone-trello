import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import store from "../store/store";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";


function BoardCreator() {
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
                  >
                      Добавить
                  </Button>
              </div>

              <div className='BoardCreatorButtonClose'>
                  <Button
                      variant="contained"
                      color="primary"
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