import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import {createList} from "../actions";
import { connect } from "react-redux";

function AddListButton(props) {
    const [onAddList, setOnAddList] = useState(false);
    const [listName, setListName] = useState('');

    if(onAddList) {
        return(
            <div className='AddList'>
                <div className='TextField'>
                    <TextField
                        id="outlined-textarea"
                        value={listName}
                        multiline
                        variant="outlined"
                        fullWidth={true}
                        size='small'
                        autoFocus={true}
                        onChange={(e) => setListName(e.target.value)}
                    />
                </div>

                <div className='AddCard'>
                    <Button
                        variant="contained"
                        color="primary"
                        size='small'
                        startIcon={<AddIcon/>}
                        onClick={() => {
                            props.createList(listName, props.idBoard);
                            setOnAddList(false);
                            setListName('');
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

const mapDispatchToProps = {
    createList
};

export default connect(null, mapDispatchToProps)(AddListButton)