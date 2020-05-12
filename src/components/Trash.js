import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {Droppable} from "react-beautiful-dnd";

export function Trash() {
    return(
        <Droppable droppableId={'Trash'}>
            {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps} className='Trash'>
                    <DeleteIcon style={{fontSize: 100, color: '#333'}}/>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}