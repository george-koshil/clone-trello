import TaskList from "./TaskList";
import TodoAppBar from "./TodoAppBar";
import { DragDropContext}  from "react-beautiful-dnd";
import store from "../store";
import AddListButton from "./AddListButton";
import React, {useEffect} from "react";
import {getLists} from "../fetch_data/getLists";

function Board({board}) {
    useEffect(() => getLists(board.id), []);

    function onDragEnd(rezult) {
        const {source, destination} = rezult;

        if(destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        if(!destination) {
            return;
        }

        let sourceList = [...store.getState().boards[board.id].lists[Number.parseInt(source.droppableId)].cards];
        let destinationList = [...store.getState().boards[board.id].lists[Number.parseInt(destination.droppableId)].cards];
        let card = store.getState().boards[board.id].lists[Number.parseInt(source.droppableId)].cards[source.index];

        if(source.droppableId === destination.droppableId) {
            sourceList.splice(source.index, 1);
            sourceList.splice(destination.index, 0, card);
            store.dispatch({type:'DRAG CARD', boardID: board.id, listID:source.droppableId, cards:sourceList});
        }
        else {
            sourceList.splice(source.index, 1);
            destinationList.splice(destination.index, 0, card);
            store.dispatch({type:'DRAG CARD', listID:source.droppableId, boardID: board.id, cards:sourceList});
            store.dispatch({type:'DRAG CARD', listID:destination.droppableId, boardID: board.id, cards:destinationList});
        }
    }

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div>
                    <TodoAppBar/>
                    <div className='Board'>
                        {store.getState()}

                        <AddListButton boardId={board.id}/>
                    </div>
                </div>
            </DragDropContext>

        </div>

    )
}


export default Board




