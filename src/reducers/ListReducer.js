import {RECEIVE_LIST, RECEIVE_LISTS, REQUEST_LISTS} from "../constants";

const initialState = {
    isFetching: false,
    items: []
};

export default function ListReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LISTS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_LIST:
            return {
                ...state,
                isFetching: false,
                items: [...state.items, action.list]
            };
        case RECEIVE_LISTS:
            return {
                ...state,
                isFetching: false,
                items: action.lists
            };
        default:
            return state
    }
}