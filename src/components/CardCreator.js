import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TextField from '@material-ui/core/TextField';


function CardCreator() {
    let [isCardInput, setIsCardInput] = useState(false);

    if(isCardInput) {
        return(
            <div className='CardCreator'>
            <TextField
                id="outlined-textarea"
                label="Input text"
                multiline
                variant="outlined"
                fullWidth={true}
            />
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
                onClick={() => setIsCardInput(true)}
            >
                    Add new card
                </Button>



        </div>
    );
}

export default CardCreator