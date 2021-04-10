import axios from 'axios';
// import store from '../store/index';

export function fetch(url) {
    // store.dispatch({
    //     type: 'API_PROCESS'
    // });
    return axios
        .get(url);
}

export function store2(url, data) {
    return axios
        .post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
}
