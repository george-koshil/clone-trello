import TaskList from "./TaskList";
import TodoAppBar from "./TodoAppBar";
import AddListButton from "./AddListButton";
import React, {useEffect} from "react";
import {fetchLists, dragCard, getPos, deleteCard} from "../actions";
import {connect} from "react-redux";
import { DragDropContext } from "react-beautiful-dnd"
import store from "../store";
import {Trash} from "./Trash";

store.subscribe(() => console.log(store.getState().card.items));

function Board(props) {
    useEffect(() => props.dispatch(fetchLists(props.board.id)), []);

    const onDragEnd = (result) => {
        const {source, destination} = result;

        if(destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        if(!destination) {
            return;
        }

        if(destination.droppableId === 'Trash') {
            const card = {...props.cards[source.droppableId][source.index]};
            props.dispatch(deleteCard(card.id, source.droppableId));
            return;
        }

        let sourceList = [...props.cards[source.droppableId]];
        let destinationList = [...props.cards[destination.droppableId]];
        let prevSourceList = [...sourceList];
        let prevDestinationList = [...destinationList];
        let card = {...props.cards[source.droppableId][source.index]};

        if(source.droppableId === destination.droppableId) {
            sourceList.splice(source.index, 1);
            sourceList.splice(destination.index, 0, card);
            card.pos = getPos(destination.index, sourceList);
            sourceList.splice(destination.index, 1);
            sourceList.splice(destination.index, 0, card);
            props.dispatch(dragCard(sourceList, null, source.droppableId, null, card, destination.index, prevSourceList, prevDestinationList));
        }
        else {
            sourceList.splice(source.index, 1);
            destinationList.splice(destination.index, 0, card);
            card.pos = getPos(destination.index, destinationList);
            destinationList.splice(destination.index, 1);
            destinationList.splice(destination.index, 0, card);
            props.dispatch(dragCard(sourceList, destinationList, source.droppableId, destination.droppableId, card, destination.index, prevSourceList, prevDestinationList));
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
                <TodoAppBar/>
                    <div className='Board'>
                        {props.lists.map((list, index) => {
                           if(list.idBoard === props.board.id) {
                                return <TaskList
                                   key={index}
                                   name={list.name}
                                   boardId={list.idBoard}
                                   idList={list.id}
                                   listIndex={index}
                               />
                           }
                        })}
                        <AddListButton idBoard={props.board.id}/>
                    </div>
            <Trash/>
        </DragDropContext>
    )
}

const mapStateToProps = store => {
    return {
        lists: store.list.items,
        cards:store.card.items
    }
};

export default connect(mapStateToProps)(Board)




