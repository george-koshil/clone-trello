import {LOG_IN, LOG_OUT} from "../constants";

const  initialState = {
    isLogin: localStorage.getItem('isLogin')
};

export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {...state, isLogin: true};
        case LOG_OUT:
            return {...state, isLogin: false};
        default:
            return state;
    }
}