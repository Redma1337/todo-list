/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

import Axios from 'axios'

Vue.use(Vuex);
export const store = new Vuex.Store({
    strict: true,
    state: () => ({
        todos: []
    }),
    getters: {
        openTodos: (state) => {
            return state.todos;
        }
    },
    mutations: {
        addTodo: async (state, value) => {
            var response = await Axios.post("http://localhost:8080/todo/", { description: value });
            var newTodo = {
                id: response.data._id,
                done: false,
                description: value
            }
            state.todos.push(newTodo);
        },
        deleteTodo: async (state, { index, id }) => {
            state.todos.splice(index, 1); // client side

            await Axios.delete("http://localhost:8080/todo/" + id); //server side
        },
        toggleTodo: async (state, { index, id }) => {
            var bool = state.todos[index].done;
            state.todos[index].done = !bool;

            await Axios.post("http://localhost:8080/todo/" + id, { done: !bool });
        },

        fetchTodos(state, data) {
            console.log("fetching");
            state.todos = [];
            data.forEach(v => state.todos.push({ id: v._id, done: v.done, description: v.description }));
        }
    },
    actions: {
        fetchTodos : async (ctx) => {
            var { data } = await Axios.get("http://localhost:8080/todo/");
            ctx.commit("fetchTodos", data);
        },
        addTodo: (ctx, payload) => {
            setTimeout(() => { //wait for data access (a bit useless)
                ctx.commit('addTodo', payload);
            }, 100);
        },
        deleteTodo(ctx, { index, id }) {
            setTimeout(() => {
                ctx.commit('deleteTodo', { index, id });
            }, 100);
        },
        toggleTodo(ctx, { index, id }) {
            setTimeout(() => {
                ctx.commit('toggleTodo', { index, id });
            }, 100);
        }
    }
});