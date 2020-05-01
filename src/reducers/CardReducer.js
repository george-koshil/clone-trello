import {RECEIVE_CARDS, RECEIVE_CARD, REQUEST_CARDS, DELETE_CARDS, DRAG_CARD} from "../constants";

const initialState = {
  isFetching: false,
  items: {}
};

export default function CardReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CARDS:
            return {
                ...state,
                isFetching: false,
                items: {...state.items, [action.idList]: action.cards}
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
              items: {...state.items, [action.idList]:[...state.items[action.idList], action.card]}
            };
        case DELETE_CARDS:
            return {
                ...state,
                items: {}
            };
        case DRAG_CARD:
            return {
                ...state,
                items: [...state]
            };
        default:
            return state
    }
}
