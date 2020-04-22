import {
    ADD_BOARD,
    ADD_BOARDS,
    ADD_CARD,
    ADD_CARDS,
    ADD_LIST,
    ADD_LISTS,
    DRAG_CARD
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
        boards
    }
}

export function addList(listName, boardId) {
    return {
        type: ADD_LIST,
        listName,
        boardId

    }
}

export function addLists(lists, boardId) {
    return {
        type: ADD_LISTS,
        lists,
        boardId
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

