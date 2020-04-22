import React from "react";

function BoardTile({name}) {
    return(
        <div className='BoardTile'>
            <div className='BoardTileTitle'>
                {name}
            </div>
        </div>
    )
}

export default BoardTile
