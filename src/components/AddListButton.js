import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import {createList} from "../store/actions";
import { connect } from "react-redux";

function AddListButton(props) {
    const { createList, idBoard } = props;
    const [isAddList, setIsAddList] = useState(false);
    const [listName, setListName] = useState('');

    function setName(e) {
        setListName(e.target.value);
    }

    function addNewList() {
        createList(listName, idBoard);
        setIsAddList(false);
        setListName('');
    }

    function openAddListBar() {
        setIsAddList(true);
    }

    function closeAddListBar() {
        setIsAddList(false);
    }

    if(isAddList) {
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
                        onChange={setName}
                    />
                </div>

                <div className='AddCard'>
                    <Button
                        variant="contained"
                        color="primary"
                        size='small'
                        startIcon={<AddIcon/>}
                        onClick={addNewList}
                    >
                        Добавить колонку
                    </Button>
                    <div onClick={closeAddListBar}>
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
              onClick={openAddListBar}
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