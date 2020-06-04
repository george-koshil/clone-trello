import React from "react";

export default function BoardTile(props) {
    const { name } = props;
    return(
        <div className='BoardTile'>
            <div className='BoardTileTitle'>
                {name}
            </div>
        </div>
    )
}
