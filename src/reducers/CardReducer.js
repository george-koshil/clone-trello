import {RECEIVE_CARDS, RECEIVE_CARD, REQUEST_CARDS, DELETE_CARDS} from "../constants";

const initialState = {
  isFetching: false,
  items: []
};

export default function CardReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CARDS:
            return {
                ...state,
                isFetching: false,
                items: [...state.items, ...action.cards]
            };
        case REQUEST_CARDS:
            return {
              ...state,
              isFetching: true
            };
        case RECEIVE_CARD:
            return {
              ...state,
              isFetching: false,
              items: [...state.items, action.card]
            };
        case DELETE_CARDS:
            return {
                ...state,
                items: []
            };
        default:
            return state
    }
}
