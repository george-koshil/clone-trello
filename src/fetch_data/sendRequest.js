import {API_BASE_URL, API_VERSION, AUTH} from "../constants";

const transformToQueryString = params =>
    Object.keys(params)
        .filter(key => params[key] !== undefined)
        .map(key => {
            const keyURI = encodeURIComponent(key);
            const paramURI = encodeURIComponent(params[key]);
            return `${keyURI}=${paramURI}`;
        })
        .join('&');


export  const sendRequest = (path, init) => {
    let url = `${API_BASE_URL}/${API_VERSION}${path}`;

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
