import React, {useEffect} from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";
import CardCreator from "./CardCreator";
import { connect } from "react-redux";
import {fetchCards} from "../actions";
import store from "../store";

function TaskList(props) {
    useEffect(() => props.dispatch(fetchCards(props.idList)),[]);

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




//store.subscribe(() => console.log(store.getState()));