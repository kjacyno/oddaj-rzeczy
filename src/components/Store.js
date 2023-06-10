
import { action, createStore } from 'easy-peasy';

export const store = createStore({
    user: JSON.parse(localStorage.getItem('user')),
    userLogin: action((state, payload) => {
        state.user = payload;
        localStorage.setItem('user', JSON.stringify(payload));
    }),
    userLogout: action((state) => {
        state.user = '';
        localStorage.removeItem('user');
    }),
});
