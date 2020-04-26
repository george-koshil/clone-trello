import {ADD_BOARD, ADD_BOARDS, FETCH_BOARDS} from "../constants";

const initialState = {
    isFetching: false,
    items: []
};

export default function BoardReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BOARDS:
            return {
                ...state,
                isFetching: true
            };
        case ADD_BOARD:
            return {
                ...state,
                isFetching: false,
                items: [...state.items, action.board]
            };
        case ADD_BOARDS:
            return {
                ...state,
                isFetching: false,
                items: [...state.items, ...action.boards]
            };
        default:
            return state
    }
}