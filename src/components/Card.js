import React from "react";
import { Draggable } from "react-beautiful-dnd";
import DeleteItem from "./DeleteItem";
import {deleteCard} from "../store/actions";
import {connect} from "react-redux";


function Card(props) {
    const { id, index, listIndex, idList, name, deleteCard } = props;

    function deleteTask() {
        deleteCard(id, idList);
    }

    return(
        <Draggable draggableId={`${id}.${index}.${listIndex}`} index={index}>
            {provided => (
                <div
                    className='Card'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {name}

                    <DeleteItem
                        className='DeleteCard'
                        handler={deleteTask}
                    />
                </div>
            )}
        </Draggable>
    )
}

const mapDispatchToProps = {
    deleteCard
};

export default connect(null,mapDispatchToProps)(Card)