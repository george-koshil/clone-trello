import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import {createCard} from "../actions";
import { connect } from "react-redux";


function CardCreator(props) {
    let [onCardInput, setOnCardInput] = useState(false);
    let [cardName, setCardName] = useState('');

    if(onCardInput) {
        return(
            <div className='CardCreator'>
                <div className='TextField'>
                    <TextField
                        id="outlined-textarea"
                        value={cardName}
                        multiline
                        variant="outlined"
                        fullWidth={true}
                        size='small'
                        autoFocus={true}
                        onChange={(e) => setCardName(e.target.value)}
                    />
                </div>

                <div className='AddCard'>
                    <Button
                        variant="contained"
                        color="primary"
                        size='small'
                        startIcon={<AddIcon/>}
                        onClick={() => {
                            props.createCard(cardName, props.idList);
                            setCardName('');
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

const mapDispatchToProps = {
    createCard
};

export default connect(null,mapDispatchToProps)(CardCreator)