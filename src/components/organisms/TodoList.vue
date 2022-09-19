<template>
  <div :class="$style.todoList">
    <ul>
      <TodoItem
        v-for="todo of getTodosFilter"
        :key="todo.title"
        v-bind:todo="todo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/organisms/TodoItem";
import { mapGetters } from "vuex";
export default {
  // computed: {
  //   AllTask() {
  //     return this.$store.getters.getTodos;
  //   },
  // },
  date() {
    return {
      selected: this.$store.state.buttonChecked,
    };
  },
  async mounted() {
    this.$store.dispatch("getTasks");
  },
  computed: {
    ...mapGetters(["getTodosFilter"]),
  },
  components: {
    TodoItem,
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/index.scss";
</style>
