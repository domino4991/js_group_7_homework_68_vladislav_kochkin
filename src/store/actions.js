import {
    CHANGED_TASK_FORM, CLOSE_ERROR_MODAL,
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

const fetchTasksSuccess = tasks => {
    return {type: FETCH_TASKS_SUCCESS, tasks};
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

export const changedTaskForm = e => {
    return {type: CHANGED_TASK_FORM, value: e.target.value};
};

export const addNewTask = (newTask, e) => {
    e.preventDefault();
    return async dispatch => {
        dispatch(fetchTasksRequest());
        const task = {
            task: newTask,
            done: false
        };
        try {
            await axios.post('/tasks.json', task);
            dispatch(fetchTasks());
        } catch (e) {
            dispatch(fetchTasksError(e));
        }
    };
};

export const saveDoneTask = (id, tasks) => {
    return async dispatch => {
        dispatch(fetchTasksRequest());
        const i = tasks.findIndex(t => t.id === id);
        const putTask = {
            task: tasks[i].task,
            done: !tasks[i].done
        };
        try {
            await axios.put(`/tasks/${id}.json`, putTask);
            dispatch(fetchTasks());
        } catch (e) {
            dispatch(fetchTasksError(e));
        }
    };
};

export const deleteTask = id => {
    return async dispatch => {
        dispatch(fetchTasksRequest());
        try {
            await axios.delete(`/tasks/${id}.json`);
            dispatch(fetchTasks());
        } catch (e) {
            dispatch(fetchTasksError(e));
        }
    };
};

export const closeModal = () => {
    return {type: CLOSE_ERROR_MODAL};
};