import {
    AUTH,
    API_BASE_URL,
    API_VERSION
} from "../constants";

const sendRequest = (path, init) => {
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


const transformToQueryString = params =>
    Object.keys(params)
        .filter(key => params[key] !== undefined)
        .map(key => {
            const keyURI = encodeURIComponent(key);
            const paramURI = encodeURIComponent(params[key]);
            return `${keyURI}=${paramURI}`;
        })
        .join('&');


export function getBoards() {
    sendRequest(`/members/me/boards`)
        .then(boards => {
            boards.forEach(board => store.push(board));
        })
}


function getCards() {
    return new Promise(resolve => {
        let cardsPromises = [],
            count = 0;

        store.forEach(board => {
            board.lists.forEach(list => {
                cardsPromises.push(sendRequest(`/lists/${list.id}/cards`));
            })
        });

        Promise.all(cardsPromises)
            .then(cards => {
                store.forEach(board => {
                    board.lists.forEach(list => {
                        list.cards = cards[count++];
                    })
                });

                resolve('done');
            })

    })
}
