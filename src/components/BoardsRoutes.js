import { Route } from "react-router-dom";
import Board from "./Board";
import React from "react";
import { connect } from "react-redux";

function BoardsRoutes(props) {
  let { boards } = props;
  return boards.map((board) => {
    return (
      <Route key={board.id} path={"/" + board.id}>
        <Board board={board} />
      </Route>
    );
  });
}

const mapStateToProps = (state) => ({
  boards: state.board.items,
});

export default connect(mapStateToProps)(BoardsRoutes);
