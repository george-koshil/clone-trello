import {RECEIVE_CARDS, RECEIVE_CARD, REQUEST_CARDS, DELETE_CARDS, DELETE_CARD} from "../constants";

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
                items: {...state.items, [action.payload.idList]: action.payload.cards}
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
              items: {...state.items, [action.payload.idList]:[...state.items[action.payload.idList], action.payload.card]}
            };
        case DELETE_CARDS:
            return {
                ...state,
                items: {}
            };
        case DELETE_CARD:
            return {
                ...state,
                items: {...state.items,
                    [action.meta.idList]: state.items[action.meta.idList].filter(card => {
                        return card.id !== action.meta.idCard
                    })}
            };
        default:
            return state
    }
}
