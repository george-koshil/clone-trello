import React from "react";

function BoardTile({title}) {
    return(
        <div className='BoardTile'>
            <div className='BoardTileTitle'>
                {title}
            </div>
        </div>
    )
}

export default BoardTile
