import React from "react";
import { Draggable} from "react-beautiful-dnd";

function Card({text,id,index}) {
    return(
        <Draggable draggableId={id} index={index}>
            {(provided) =>(
                <div className='Card' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {text}
                </div>
            )}

        </Draggable>

    )
}

export default Card