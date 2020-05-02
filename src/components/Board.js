import TaskList from "./TaskList";
import TodoAppBar from "./TodoAppBar";
import AddListButton from "./AddListButton";
import React, {useEffect} from "react";
import {deleteCards, fetchLists, receiveCards} from "../actions";
import {connect} from "react-redux";
import { DragDropContext } from "react-beautiful-dnd"
import store from "../store";

store.subscribe(() => console.log(store.getState().card.items));
function Board(props) {
    useEffect(() => props.dispatch(fetchLists(props.board.id)), []);

    function onDragEnd(rezult) {
        const {source, destination} = rezult;

        if(destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        if(!destination) {
            return;
        }

        let sourceList = [...props.cards[source.droppableId]];
        let destinationList = [...props.cards[destination.droppableId]];
        let card = {...props.cards[source.droppableId][source.index]};


        if(source.droppableId === destination.droppableId) {
            sourceList.splice(source.index, 1);
            sourceList.splice(destination.index, 0, card);
            props.dispatch(receiveCards(sourceList, source.droppableId));
        }
        else {
            sourceList.splice(source.index, 1);
            destinationList.splice(destination.index, 0, card);
            props.dispatch(receiveCards(sourceList, source.droppableId));
            props.dispatch(receiveCards(destinationList, destination.droppableId));
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
                               />
                           }
                        })}
                        <AddListButton idBoard={props.board.id}/>
                    </div>
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




