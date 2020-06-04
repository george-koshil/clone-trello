import {API_BASE_URL, API_VERSION, API_KEY} from "../constants";

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
                url = `${url}?${transformToQueryString(params)}&${Auth(localStorage.getItem('token'))}`;
            }
        }
        else url = `${url}?${Auth(localStorage.getItem('token'))}`;

        return fetch(url, init).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            return response.json();
        });
    };

    export function Auth(token) {
        return `key=${API_KEY}&token=${token}`;
    }

    export function getToken(url) {
        return url.slice(34, url.length)
    }

    export function saveToken() {
        localStorage.setItem('token', getToken(window.location.href));
        localStorage.setItem('isLogin', 'true');
    }

