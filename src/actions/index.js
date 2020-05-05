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
    DELETE_CARDS,
    AUTH
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

export function receiveCard(card, idList) {
    return {
        type: RECEIVE_CARD,
        card,
        idList
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
                dispatch(receiveCard(card, idList));
            })
    }
}


export function dragCard(sourceCards, destinationCards, sourceIdList, destinationIdList, card, index, prevList) {
    return dispatch => {
        let idList = sourceIdList;
        let cards = sourceCards;

        if(destinationCards && destinationIdList) {
            dispatch(receiveCards(sourceCards, sourceIdList));
            dispatch(receiveCards(destinationCards, destinationIdList));
            idList = destinationIdList;
            cards = destinationCards;
        }
        dispatch(receiveCards(sourceCards, sourceIdList));

        sendRequest(`/cards/${card.id}`, {
            method: 'PUT',
            params: {
                idList,
                pos: getPos(index, cards)
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}


export function getPos(index,cards) {
    let pos1, pos2;

    if(cards.length === 1) return cards[index].pos;

    if(index === 0) return cards[index + 1].pos / 2;
    else pos1 = cards[index - 1].pos;

    if(index === cards.length - 1) return cards[index - 1].pos + 16384;
    else pos2 = cards[index + 1].pos;

    return (pos1 + pos2) / 2
}

