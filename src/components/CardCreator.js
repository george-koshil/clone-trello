import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TextField from '@material-ui/core/TextField';
import store from "../store/store";


function CardCreator() {
    let [onCardInput, setOnCardInput] = useState(false);
    let [inputText, setInputText] = useState(null);


    if(onCardInput) {
        return(
            <div className='CardCreator'>
            <TextField
                id="outlined-textarea"
                label="Input text"
                multiline
                variant="outlined"
                fullWidth={true}
                autoFocus={true}
                onChange={(e) => setInputText(e.target.value)}
            />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PlaylistAddIcon/>}
                    fullWidth={true}
                    onClick={() => store.dispatch({type: 'ADD NEW CARD', id: '0', card: {id: 0, text: inputText}})}
                >
                    Add new card
                </Button>
            </div>

        )
    }
    return(
        <div className='CardCreator'>
            <Button
                variant="contained"
                color="primary"
                startIcon={<PlaylistAddIcon/>}
                fullWidth={true}
                onClick={() => setOnCardInput(true)}
            >
                    Add new card
                </Button>



        </div>
    );
}

export default CardCreator