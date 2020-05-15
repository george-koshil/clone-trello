export let TOKEN = localStorage.getItem('token');

export const RECEIVE_BOARD = 'RECEIVE BOARD';

export const REQUEST_BOARDS = 'REQUEST BOARDS';

export const RECEIVE_BOARDS = 'RECEIVE BOARDS';

export const RECEIVE_LIST = 'RECEIVE LIST';

export const RECEIVE_LISTS = 'RECEIVE LISTS';

export const REQUEST_LISTS = 'REQUEST LISTS';

export const RECEIVE_CARD = 'RECEIVE CARD';

export const REQUEST_CARDS = 'REQUEST_CARDS';

export const RECEIVE_CARDS = 'RECEIVE CARDS';

export const DELETE_CARDS = 'DELETE CARDS';

export const DELETE_CARD = 'DELETE CARD';

export const API_BASE_URL = 'https://api.trello.com';

export const API_VERSION = '1';

export const API_KEY = '1cfea9d7d56775b6eeaa0aec53d44336';

export const AUTH = `key=${API_KEY}&token=${TOKEN}`;

export const AUTH_URL = ` https://trello.com/1/authorize?expiration=1day&name=CloneTrello&scope=read,write,account&response_type=token&key=${API_KEY}&return_url=http://localhost:3000/login`;

