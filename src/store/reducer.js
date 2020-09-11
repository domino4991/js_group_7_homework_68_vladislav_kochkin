import {
    FETCH_COUNTER_ERROR,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS
} from "./actionTypes";

const initialState = {
    counter: 0,
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTER_REQUEST:
            return {...state, loading: true};
        case FETCH_COUNTER_SUCCESS:
            return {...state, loading: false, counter: action.value};
        case FETCH_COUNTER_ERROR:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
};

export default reducer;