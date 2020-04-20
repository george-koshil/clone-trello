import {combineReducers} from "redux";
import ListReducer from "./ListReducer";
import BoardReducer from "./BoardReducer";

export default combineReducers({
    board: BoardReducer,
    list: ListReducer
});