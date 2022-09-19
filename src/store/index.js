import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    buttons: [
      { id: 4, title: "All" },
      { id: 5, title: "Active" },
      { id: 6, title: "Completed" },
    ],
    buttonChecked: "All",
    loading: true,
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getAllButton(state) {
      return state.buttons;
    },
    validTask(state) {
      return state.todos.filter((todo) => todo.title);
    },
    getButtonChecked(state) {
      return state.buttonChecked;
    },
    getTodosFilter(state) {
      if (state.buttonChecked === "All") return state.todos;

      if (state.buttonChecked === "Active")
        return state.todos.filter((todo) => todo.completed === false);

      if (state.buttonChecked === "Completed")
        return state.todos.filter((todo) => todo.completed === true);
    },
    getLength(state, getters) {
      return getters.getTodosFilter.length;
    },
  },
  mutations: {
    updateTasks(state, todos) {
      state.todos = todos;
    },
    createTask(state, newPost) {
      console.log(newPost);
      state.todos.unshift(newPost);
    },
    deleteTask(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    chooseTaskviaButton(state, word) {
      state.buttonChecked = word;
    },
  },
  actions: {
    async getTasks(ctx) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const data = await response.json();
      console.log(data);
      ctx.commit("updateTasks", data);
    },
  },
  modules: {},
});
