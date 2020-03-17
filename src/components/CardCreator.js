import React from "react";
import Button from "@material-ui/core/Button";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';



function CardCreator() {
    return(
        <div className='CardCreator'>
            <Button
                variant="contained"
                color="primary"
                startIcon={<PlaylistAddIcon/>}
            >
                    Add card
                </Button>

        </div>
    );
}

export default CardCreator