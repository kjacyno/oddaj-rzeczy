import {action, createStore} from 'easy-peasy';

export const store = createStore({
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '',
    setUserLogin: action((state, payload) => {
        state.user = payload;
        localStorage.setItem('user', JSON.stringify(payload));
    }),
    userLogout: action((state, payload) => {
        state.user = payload;
        localStorage.removeItem('user');
    }),
});

export const formData = createStore({

})
