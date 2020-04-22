import {addBoards} from "../actions";
import {API_BASE_URL, API_VERSION, AUTH} from "../constants";
import * as constants from "../constants"


const sendRequest = (path, init) => {
    let url = `${API_BASE_URL}/${API_VERSION}${path}`;
    console.log(constants.AUTH);
    if (init) {
        const { params } = init;
        if (params) {
            url = `${url}?${transformToQueryString(params)}&${AUTH}`;
        }
    }
    else url = `${url}?${AUTH}`;

    return fetch(url, init).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    });
};


const transformToQueryString = params =>
    Object.keys(params)
        .filter(key => params[key] !== undefined)
        .map(key => {
            const keyURI = encodeURIComponent(key);
            const paramURI = encodeURIComponent(params[key]);
            return `${keyURI}=${paramURI}`;
        })
        .join('&');


export function getBoards(dispatch) {
    sendRequest(`/members/me/boards`)
        .then(boards => {
            dispatch(addBoards(boards));
        })
}

