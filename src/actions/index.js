import {
    RECEIVE_BOARD,
    RECEIVE_BOARDS,
    RECEIVE_CARD,
    RECEIVE_CARDS,
    RECEIVE_LIST,
    RECEIVE_LISTS,
    REQUEST_BOARDS,
    REQUEST_LISTS,
    REQUEST_CARDS,
    DELETE_CARDS, DRAG_CARD
} from "../constants";
import {sendRequest} from "../fetch_data/sendRequest";

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

export function receiveList(list) {
    return {
        type: RECEIVE_LIST,
        list
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

export function receiveCard(card) {
    return {
        type: RECEIVE_CARD,
        card
    }
}

export function receiveCards(cards,idList) {
    return {
        type: RECEIVE_CARDS,
        cards,
        idList
    }
}

export function requestCards() {
    return {
        type: REQUEST_CARDS
    }
}

export function deleteCards() {
    return {
        type: DELETE_CARDS
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
                    dispatch(receiveCards(cards,listId));
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

export function createList(name, idBoard) {
    return dispatch => {
        dispatch(requestLists());

        sendRequest('/lists/', {
            method: 'POST',
            params: {
                name,
                idBoard
            }
        })
            .then(list => {
                dispatch(receiveList(list))
            })

    }
}

export function createCard(name, idList) {
    return dispatch => {
        dispatch(requestCards());

        sendRequest('/cards', {
            method: 'POST',
            params: {
                name,
                idList,
            }
        })
            .then(card => {
                dispatch(receiveCard(card));
            })
    }
}

export function dragCard(idList) {
    return {
        type: DRAG_CARD,
        idList
    }
}


