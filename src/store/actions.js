import {
    FETCH_COUNTER_ERROR,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS
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
}