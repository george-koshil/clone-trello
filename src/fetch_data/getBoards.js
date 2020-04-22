import {fetchBoards, addBoards} from "../actions";
import {sendRequest} from "./sendRequest";

export default function getBoards() {
    return dispatch => {
        dispatch(fetchBoards());

        sendRequest(`/members/me/boards`)
            .then(boards => {
                dispatch(addBoards(boards));
            })
    }
}