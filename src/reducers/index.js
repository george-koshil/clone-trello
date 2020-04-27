import {combineReducers} from "redux";
import ListReducer from "./ListReducer";
import BoardReducer from "./BoardReducer";
import CardReducer from "./CardReducer";

export default combineReducers({
    board: BoardReducer,
    list: ListReducer,
    card: CardReducer
});