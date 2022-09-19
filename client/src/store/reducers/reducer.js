import cookie from "react-cookies"
import { FETCH_DATA_BEGIN, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "../actions/action"

const initialState = {
    token: '',
    role: '',
    loggedIn: false,
    loading: false,
    error: null,
    items: []
}

if (cookie.load("token")) {
    initialState.token = cookie.load("token");
    initialState.loggedIn = true;
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                items: action.payload.data
            };
        }
        case FETCH_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        }
        default: {
            return state
        }
    }
} 

export default reducer