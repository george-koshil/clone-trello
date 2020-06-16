import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import BoardReducer from "./BoardReducer";
import CardReducer from "./CardReducer";
import LoginReducer from "./LoginReducer";

export default combineReducers({
  board: BoardReducer,
  list: ListReducer,
  card: CardReducer,
  login: LoginReducer,
});
