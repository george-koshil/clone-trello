import React, {useEffect} from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";
import CardCreator from "./CardCreator";
import { connect } from "react-redux";
import {fetchCards} from "../actions";


function TaskList(props) {
    useEffect(() => props.dispatch(fetchCards(props.listId)),[]);

    return(
        <div className='TaskList'>
            <TaskListTitle title={props.name}/>
            <hr />

            {props.cards.map((card, index) => {
                if(card.idList === props.listId) {
                    return <Card
                        name={card.name}
                        key={index}
                    />
                }
            })}

            <CardCreator boardId={props.boardId} listId={props.listId}/>
        </div>
    )

}

const mapStateToProps = store => {
  return {
     cards: store.card.items
  }
};

export default connect(mapStateToProps)(TaskList)