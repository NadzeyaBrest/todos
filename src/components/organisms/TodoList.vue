<template>
  <div :class="$style.todoList">
    <Loader v-if="getLoading" />
    <ul>
      <TodoItem
        v-for="(todo, i) of getTodosFilter"
        :index="i"
        :key="todo.title"
        v-bind:todo="todo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/organisms/TodoItem";
import Loader from "@/components/atoms/Loader";
import { mapGetters } from "vuex";
export default {
  async mounted() {
    this.$store.dispatch("getTasks");
  },
  computed: {
    ...mapGetters(["getTodosFilter", "getLoading"]),
  },
  components: {
    TodoItem,
    Loader,
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/index.scss";
</style>
