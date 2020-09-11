import {
    CHANGED_TASK_FORM,
    FETCH_COUNTER_ERROR,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS, FETCH_TASKS_ERROR, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS
} from "./actionTypes"
import axios from '../axios-api';

const fetchCounterRequest = () => {
    return {type: FETCH_COUNTER_REQUEST};
};

const fetchCounterSuccess = value => {
    return {type: FETCH_COUNTER_SUCCESS, value};
};

const fetchCounterError = error => {
    return {type: FETCH_COUNTER_ERROR, error};
};

export const fetchCounter = () => {
    return async dispatch => {
        dispatch(fetchCounterRequest());
        try {
            const response = await axios.get('/counter.json');
            dispatch(fetchCounterSuccess(response.data));
        } catch (e) {
            dispatch(fetchCounterError(e));
        }
    };
};

export const sendCounter = value => {
    return async dispatch => {
        dispatch(fetchCounterRequest());
        if(value === 0) {
            value = '0';
        }
        try {
            const response = await axios.put('/counter.json', value);
            dispatch(fetchCounterSuccess(response.data));
        } catch (e) {
            dispatch(fetchCounterError(e));
        }
    };
};

const fetchTasksRequest = () => {
    return {type: FETCH_TASKS_REQUEST};
};

const fetchTasksSuccess = value => {
    return {type: FETCH_TASKS_SUCCESS, value};
};

const fetchTasksError = error => {
    return {type: FETCH_TASKS_ERROR, error};
};

export const fetchTasks = () => {
    return async dispatch => {
        dispatch(fetchTasksRequest());
        try {
            const response = await axios.get('/tasks.json');
            dispatch(fetchTasksSuccess(response.data));
        } catch (e) {
            dispatch(fetchTasksError(e));
        }
    };
};

export const changedTaskForm = (value, name) => {
    return {type: CHANGED_TASK_FORM, value, name};
};