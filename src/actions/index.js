import {
    RECEIVE_BOARD,
    RECEIVE_BOARDS,
    RECEIVE_CARD,
    RECEIVE_CARDS,
    RECEIVE_LIST,
    RECEIVE_LISTS,
    REQUEST_BOARDS,
    REQUEST_LISTS,
    REQUEST_CARDS
} from "../constants";
import {sendRequest} from "../fetch_data/sendRequest";
import store from "../store";

export function receiveBoard(board) {
    return {
        type: RECEIVE_BOARD,
        board
    }
}

export function receiveBoards(boards) {
    return {
        type: RECEIVE_BOARDS,
        boards
    }
}

export function requestBoards() {
    return {
        type: REQUEST_BOARDS
    }
}

export function receiveList(listName, boardId) {
    return {
        type: RECEIVE_LIST,
        listName,
        boardId
    }
}

export function receiveLists(lists) {
    return {
        type: RECEIVE_LISTS,
        lists
    }
}

export function requestLists() {
    return {
        type: REQUEST_LISTS
    }
}

export function receiveCard(cardName, listId, boardId) {
    return {
        type: RECEIVE_CARD,
        cardName,
        listId,
        boardId
    }
}

export function receiveCards(cards) {
    return {
        type: RECEIVE_CARDS,
        cards
    }
}

export function requestCards() {
    return {
        type: REQUEST_CARDS
    }
}

export  function fetchBoards() {
    return dispatch => {
        dispatch(requestBoards());

        sendRequest(`/members/me/boards`)
            .then(boards => {
                dispatch(receiveBoards(boards));
            })
    }
}

export  function fetchCards(listId) {
    return dispatch => {
            dispatch(requestCards());

            sendRequest(`/lists/${listId}/cards`)
                .then(cards => {
                    dispatch(receiveCards(cards));
                })
    }
}

export function fetchLists(boardId) {
    return dispatch => {
            dispatch(requestLists());

            sendRequest(`/boards/${boardId}/lists`)
                .then(lists => {
                    dispatch(receiveLists(lists, boardId));
                })
    }
}

export function createBoard(name) {
    return dispatch => {
        dispatch(requestBoards());

        sendRequest(`/boards/`, {
            method: 'POST',
            params: {
                name
            }
        })
            .then(board => {
                dispatch(receiveBoard(board))
            })
    }
}



