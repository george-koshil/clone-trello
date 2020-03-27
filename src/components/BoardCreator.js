import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import store from "../store/store";
import AddIcon from "@material-ui/icons/Add";


function BoardCreator() {
    let [onBoardCreator, setOnBoardCreator] = useState(false);
    let [boardName, setBoardName] = useState('');

    if(onBoardCreator) {
        return(
          <div className='formBoardCreator'>
              <TextField
                  id="outlined-textarea"
                  value={boardName}
                  multiline
                  variant="outlined"
                  fullWidth={true}
                  size='large'
                  autoFocus={true}
                  onChange={(e) => setBoardName(e.target.value)}
              />

              <Button
                  variant="contained"
                  color="primary"
                  size='small'
                  startIcon={<AddIcon/>}
                  onClick={() => {
                      setBoardName('');
                    }
                  }
              >
                  Создать доску
              </Button>
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