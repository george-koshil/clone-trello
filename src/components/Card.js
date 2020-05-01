import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Card(props) {
    return(
        <Draggable draggableId={props.id} index={props.index}>
            {provided => (
                <div
                    className='Card'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {props.name}
                </div>
            )}
        </Draggable>
    )
}

export default Card