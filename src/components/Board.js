import React from "react";
import TaskList from "./TaskList";
import TodoAppBar from "./TodoAppBar";
import { DragDropContext}  from "react-beautiful-dnd";
import store from "../store/store";

function Board({lists}) {
    const onDragEnd = rezult => {
        const {source, destination} = rezult;

        if(destination.droppableId === source.droppableId &&
        destination.index === source.index) {
            return;
        }

        if(!destination) {
            return;
        }

        let sourceList = [...store.getState().lists[Number.parseInt(source.droppableId)].cards];
        let destinationList = [...store.getState().lists[Number.parseInt(destination.droppableId)].cards];
        let card = store.getState().lists[Number.parseInt(source.droppableId)].cards[source.index];

        if(source.droppableId === destination.droppableId) {
            sourceList.splice(source.index, 1);
            sourceList.splice(destination.index, 0, card);
            store.dispatch({type:'DRAG CARD', id:source.droppableId, cards:sourceList});
        }
        else {
            sourceList.splice(source.index, 1);
            destinationList.splice(destination.index, 0, card);
            store.dispatch({type:'DRAG CARD', id:source.droppableId, cards:sourceList});
            store.dispatch({type:'DRAG CARD', id:destination.droppableId, cards:destinationList});
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <TodoAppBar />
                <div className='Board'>
                    {lists.map((list, index) => (
                        <TaskList key={list.id} cards={list.cards} title={list.title} id={index.toString()}/>
                    ))}
                </div>
            </div>
        </DragDropContext>

    )
}

export default Board




