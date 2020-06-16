import React, { useEffect } from "react";
import Card from "./Card";
import TaskListTitle from "./TaskListTitle";
import CardCreator from "./CardCreator";
import { connect } from "react-redux";
import { fetchCards, deleteCards } from "../store/actions";
import { Droppable } from "react-beautiful-dnd";

function TaskList(props) {
  const { dispatch, idList, cards, listIndex, name } = props;

  useEffect(() => {
    dispatch(fetchCards(idList));
    return () => dispatch(deleteCards());
  }, [dispatch, idList]);

  let listCards = null;
  if (cards[idList]) {
    listCards = cards[idList].map((card, index) => {
      return (
        <Card
          name={card.name}
          key={card.id}
          id={card.id}
          index={index}
          listIndex={listIndex}
          idList={idList}
        />
      );
    });
  }

  return (
    <div className="TaskList">
      <TaskListTitle title={name} />
      <hr />

      <Droppable droppableId={idList}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {listCards}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <CardCreator idList={idList} />
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    cards: store.card.items,
  };
};

export default connect(mapStateToProps)(TaskList);
