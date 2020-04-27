import {RECEIVE_BOARD, RECEIVE_BOARDS, REQUEST_BOARDS} from "../constants";

const initialState = {
    isFetching: false,
    items: []
};

export default function BoardReducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_BOARDS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_BOARD:
            return {
                ...state,
                isFetching: false,
                items: [...state.items, action.board]
            };
        case RECEIVE_BOARDS:
            return {
                ...state,
                isFetching: false,
                items: [...state.items, ...action.boards]
            };
        default:
            return state
    }
}