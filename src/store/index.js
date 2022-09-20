import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    isLoading: false,
    error: [],
    buttons: [
      { id: 4, title: "All" },
      { id: 5, title: "Active" },
      { id: 6, title: "Completed" },
    ],
    buttonChecked: "All",
    activeTask: null,
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
    getLoading(state) {
      return state.isLoading;
    },
    getActiveTask(state) {
      return state.activeTask;
    },
    getExistSubTask(state) {
      return state.todos[state.activeTask]?.subtasks ?? -1;
    },
  },

  mutations: {
    startLoading(state) {
      state.isLoading = true;
      state.todos = [];
    },
    successLoading(state, todos) {
      state.todos = todos;
      state.isLoading = false;
      localStorage.todos = JSON.stringify(state.todos);
    },
    successLoadingLocalStorage(state, todos) {
      state.todos = JSON.parse(todos);
      state.isLoading = false;
    },
    errorLoading(state, error) {
      state.error = error;
      state.isLoading = false;
    },
    updateTasks(state, todos) {
      state.todos = todos;
    },
    createTask(state, newPost) {
      console.log(newPost);
      state.todos.unshift(newPost);
      localStorage.todos = JSON.stringify(state.todos);
    },
    deleteTask(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
      localStorage.todos = JSON.stringify(state.todos);
    },
    chooseTaskviaButton(state, word) {
      state.buttonChecked = word;
    },
    changeCompleted(state, id) {
      console.log(id);
      state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });
    },
    setActiveTask(state, index) {
      state.activeTask = index;
    },
    createSubTask(state, newPost) {
      console.log(newPost);
      state.todos[state.activeTask].subtasks = [newPost];
      localStorage.todos = JSON.stringify(state.todos);
    },
    pushSubTask(state, newPost) {
      console.log(newPost);
      state.todos[state.activeTask].subtasks.push(newPost);
      localStorage.todos = JSON.stringify(state.todos);
    },
  },
  actions: {
    async getTasks(ctx) {
      ctx.commit("startLoading");
      if (localStorage.todos) {
        // localStorage.clear();
        ctx.commit("successLoadingLocalStorage", localStorage.todos);
      } else {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
          );
          const data = await response.json();

          ctx.commit("successLoading", data);
        } catch (error) {
          console.log(error);
          ctx.commit("errorLoading", error);
        }
      }
    },
  },
  modules: {},
});
