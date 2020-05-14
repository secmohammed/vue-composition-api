import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
    },
    getters: {
        counter(state) {
            return state.counter;
        },
    },
    mutations: {
        SET_COUNTER(state, value) {
            state.counter = value;
        },
    },
    actions: {
        incrementCounter({ commit, state }, increment) {
            commit("SET_COUNTER", state.counter + increment);
        },
    },
    modules: {
        
    },
});
