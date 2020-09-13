import {
    CHANGED_TASK_FORM,
    FETCH_COUNTER_ERROR,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS, FETCH_TASKS_ERROR, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS
} from "./actionTypes";

const initialState = {
    counter: 0,
    loading: false,
    error: null,
    todo: null,
    newTask: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTER_REQUEST:
        case FETCH_TASKS_REQUEST:
            return {...state, loading: true};
        case FETCH_COUNTER_SUCCESS:
            return {...state, loading: false, counter: action.value};
        case FETCH_COUNTER_ERROR:
        case FETCH_TASKS_ERROR:
            return {...state, loading: false, error: action.error};
        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                todo: action.tasks !== null ? Object.keys(action.tasks).map(item => ({
                    ...action.tasks[item],
                    id: item
                })) : null,
                newTask: ''
            }
        case CHANGED_TASK_FORM:
            return {...state, newTask: action.value}
        default:
            return state;
    }
};

export default reducer;