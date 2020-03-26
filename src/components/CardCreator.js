import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import store from "../store/store";
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';


function CardCreator({listId}) {
    let [onCardInput, setOnCardInput] = useState(false);
    let [inputText, setInputText] = useState('');
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
                            store.dispatch(addCardAction);
                            setCardId(++cardId);
                            setInputText('');
                        }
                        }
                    >
                        Добавить карточку
                    </Button>
                    <div onClick={()=> setOnCardInput(false)}>
                        <CloseIcon className='CloseButton' />
                    </div>

                </div>

            </div>

        )
    }
    return(
        <div className='CardCreator'>
            <Button
                variant='contained'
                size='medium'
                startIcon={<AddIcon />}
                fullWidth={true}
                onClick={() => setOnCardInput(true)}
            >
                    Добавить карточку
                </Button>



        </div>
    );
}

export default CardCreator