import {fetchLists, addLists} from "../actions";
import {sendRequest} from "./sendRequest";

export function getLists(boardId) {
    return dispatch => {
        dispatch(fetchLists());

        sendRequest(`boards/${boardId}/lists`)
            .then(lists => {
                dispatch(addLists(lists, boardId));
            })
    }
}