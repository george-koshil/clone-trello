import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { createCard } from "../store/actions";
import { connect } from "react-redux";

function CardCreator(props) {
  const { idList } = props;
  let [isCardInput, setOnCardInput] = useState(false);
  let [cardName, setCardName] = useState("");

  function closeInputBar() {
    setOnCardInput(false);
  }

  function openInputBar() {
    setOnCardInput(true);
  }

  function createCard() {
    props.createCard(cardName, idList);
    setCardName("");
  }

  function inputName(e) {
    setCardName(e.target.value);
  }

  if (isCardInput) {
    return (
      <div className="CardCreator">
        <div className="TextField">
          <TextField
            id="outlined-textarea"
            value={cardName}
            multiline
            variant="outlined"
            fullWidth={true}
            size="small"
            autoFocus={true}
            onChange={inputName}
          />
        </div>

        <div className="AddCard">
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AddIcon />}
            onClick={createCard}
          >
            Добавить карточку
          </Button>
          <div onClick={closeInputBar}>
            <CloseIcon className="CloseButton" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="CardCreator">
      <Button
        size="medium"
        startIcon={<AddIcon />}
        fullWidth={true}
        onClick={openInputBar}
      >
        Добавить карточку
      </Button>
    </div>
  );
}

const mapDispatchToProps = {
  createCard,
};

export default connect(null, mapDispatchToProps)(CardCreator);
