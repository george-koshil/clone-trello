import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import store from "../store/store";
import CloseIcon from "@material-ui/icons/Close";

store.subscribe(() => console.log(store.getState()))

export default function AddListButton() {
    const [onAddList, setOnAddList] = useState(false);
    const [inputText, setInputText] = useState('');

    const addListAction = {
        type: 'ADD NEW LIST',
        list: {
            title: inputText,
            id: store.getState().boards[0].lists.length.toString(),
            cards:[]
        }
    }

    if(onAddList) {
        return(
            <div className='AddList'>
                <div className='TextField'>
                    <TextField
                        id="outlined-textarea"
                        value={inputText}
                        multiline
                        variant="outlined"
                        fullWidth={true}
                        size='small'
                        autoFocus={true}

                        onChange={(e) => setInputText(e.target.value)}
                    />
                </div>

                <div className='AddCard'>
                    <Button
                        variant="contained"
                        color="primary"
                        size='small'
                        startIcon={<AddIcon/>}
                        onClick={() => {
                            store.dispatch(addListAction);
                            setOnAddList(false);
                            setInputText('');
                        }
                        }
                    >
                        Добавить колонку
                    </Button>
                    <div onClick={()=> setOnAddList(false)}>
                        <CloseIcon className='CloseButton' />
                    </div>

                </div>

            </div>

        )
    }

    return(
      <div className='AddListButton'>
          <Button
              variant='contained'
              color="default"
              startIcon={<AddIcon />}
              onClick={() => setOnAddList(true)}
          >
              Добавить колонку
          </Button>
      </div>
    );
}