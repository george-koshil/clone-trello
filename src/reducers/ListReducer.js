import {ADD_LIST, ADD_LISTS, FETCH_LISTS} from "../constants";

const initialState = {
    isFetching: false,
    items: []
};

export default function ListReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LISTS:
            return {
                ...state,
                isFetching: true
            };
        case ADD_LIST:
            return {
                ...state,
                isFetching: false,
                items: [...state.items, action.list]
            };
        case ADD_LISTS:
            return {
                ...state,
                isFetching: false,
                items: [...state.items, ...action.lists]
            };
        default:
            return state
    }
}