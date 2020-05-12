import React, {useEffect} from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";
import CardCreator from "./CardCreator";
import { connect } from "react-redux";
import {fetchCards,deleteCards} from "../actions";
import { Droppable } from "react-beautiful-dnd";
import {Trash} from "./Trash";

function TaskList(props) {
    useEffect(() => {
        props.dispatch(fetchCards(props.idList));
        return () => props.dispatch(deleteCards())
    },[]);

    let cards = null;
    if(props.cards[props.idList]) {
        cards = props.cards[props.idList].map((card, index) => {
                return <Card
                    name={card.name}
                    key={index}
                    id={card.id}
                    index={index}
                    listIndex={props.listIndex}
                />
        })
    }

    return(
        <div className='TaskList'>
            <TaskListTitle title={props.name}/>
            <hr />

            <Droppable droppableId={props.idList}>
                {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {cards}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <CardCreator idList={props.idList}/>
        </div>
    )
}

const mapStateToProps = store => {
  return {
     cards: store.card.items
  }
};

export default connect(mapStateToProps)(TaskList)
