import {LOG_IN, LOG_OUT} from "../constants";

const  initialState = {
    isLoggedIn: stingToBoolean(localStorage.getItem('isLogin')),
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

function stingToBoolean(str) {
    switch(str){
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(str);
    }
}
