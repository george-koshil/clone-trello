import {
    ADD_BOARD,
    ADD_BOARDS,
    ADD_CARD,
    ADD_CARDS,
    ADD_LIST,
    ADD_LISTS,
    DRAG_CARD
} from "../constants";


export function addBoard(board) {
    return {
        type: ADD_BOARD,
        board
    }
}

export function addBoards(boards) {
    return {
        type: ADD_BOARDS,
        boards
    }
}

export function addList(list, boardId) {
    return {
        type: ADD_LIST,
        list,
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

export function addCard(card, listId, boardId) {
    return {
        type: ADD_CARD,
        card,
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

