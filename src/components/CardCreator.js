import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TextField from '@material-ui/core/TextField';
import store from "../store/store";


function CardCreator({listId}) {
    let [onCardInput, setOnCardInput] = useState(false);
    let [inputText, setInputText] = useState(null);
    let [cardId, setCardId] = useState(0);

    const addCardAction = {
        type: 'ADD NEW CARD',
        id: listId,
        card: {
            id: `card-${listId}.${cardId}`,
            text: inputText,
        }
    };


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
                    onClick={() => {
                        store.dispatch(addCardAction);
                        setCardId(++cardId);
                        setInputText('');
                        }
                    }
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