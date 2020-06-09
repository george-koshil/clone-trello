import {LOG_IN, LOG_OUT} from "../constants";

const  initialState = {
    isLoggedIn: Boolean(localStorage.getItem('token'))
};

export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {...state, isLoggedIn: true};
        case LOG_OUT:
            return {...state, isLoggedIn: false};
        default:
            return state;
    }
}
