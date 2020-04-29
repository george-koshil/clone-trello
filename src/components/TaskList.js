import React, {useEffect} from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";
import CardCreator from "./CardCreator";
import { connect } from "react-redux";
import {fetchCards,deleteCards} from "../actions";

function TaskList(props) {
    useEffect(() => {
        props.dispatch(fetchCards(props.idList));
        return () => props.dispatch(deleteCards())
    },[]);

    return(
        <div className='TaskList'>
            <TaskListTitle title={props.name}/>
            <hr />

            {props.cards.map((card, index) => {
                if(card.idList === props.idList) {
                    return <Card
                        name={card.name}
                        key={index}
                    />
                }
            })}
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
