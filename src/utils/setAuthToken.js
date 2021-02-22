import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
        console.log(axios.defaults.headers.common);
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    };
};

export default setAuthToken;