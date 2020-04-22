import {
    ADD_BOARD,
    ADD_BOARDS,
    ADD_CARD,
    ADD_CARDS,
    ADD_LIST,
    ADD_LISTS,
    DRAG_CARD,
    FETCH_BOARDS,
    FETCH_LISTS
} from "../constants";

export function addBoard(boardName) {
    return {
        type: ADD_BOARD,
        boardName
    }
}

export function addBoards(boards) {
    return {
        type: ADD_BOARDS,
        isFetching: false,
        boards
    }
}

export function fetchBoards() {
    return {
        type: FETCH_BOARDS,
        isFetching: true
    }
}



export function addList(listName, boardId) {
    return {
        type: ADD_LIST,
        listName,
        boardId
    }
}

export function addLists(lists) {
    return {
        type: ADD_LISTS,
        isFetching: false,
        lists
    }
}

export function fetchLists() {
    return {
        type: FETCH_LISTS,
        isFetching: true
    }
}

export function addCard(cardName, listId, boardId) {
    return {
        type: ADD_CARD,
        cardName,
        listId,
        boardId
    }
}

export function addCards(cards, listId, boardId) {
    return {
        type: ADD_CARDS,
        cards,
        listId,
        boardId
    }
}

export function dragCard(cards, listId, boardId) {
    return {
        type: DRAG_CARD,
        cards,
        listId,
        boardId
    }
}

