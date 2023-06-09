import {action, createStore} from "easy-peasy";

export const store = createStore({
    user: [],
    userLogin: action((state, payload) => {
        state.user.push(payload);
    }),
    userLogout: action((state, payload) => {
        state.user = state.user.filter(msg => msg !== payload);
    }),
});