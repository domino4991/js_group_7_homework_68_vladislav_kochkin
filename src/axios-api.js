import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-list-a460d.firebaseio.com/'
});

export default instance;