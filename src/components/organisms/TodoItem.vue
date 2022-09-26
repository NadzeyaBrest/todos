<template>
  <li :class="$style.item" @click="showInput($event, index)">
    <div :class="$style.task">
      <label>
        <input
          @change="changeComp(todo.id)"
          :checked="todo.completed"
          :class="$style.input"
          type="checkbox"
        />
        <span :class="$style.customInput"></span>
      </label>
      <div :class="$style.task">
        {{ todo.title | upperCase }}
      </div>
      <button @click="removeTask(todo.id)" :class="$style.button">
        &times;
      </button>
    </div>
    <ul v-if="!todo.completed">
      <SubTask
        v-for="subtask of todo.subtasks"
        :key="subtask.id"
        :subtask="subtask"
      />
    </ul>
    <div :class="[$style.subtask, { [$style.show]: index === getActiveTask }]">
      <form @submit.prevent="submit">
        <input
          :class="$style.search"
          type="text"
          placeholder=" +  Add new task"
          v-model="title"
        />
      </form>
    </div>
  </li>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

import SubTask from "@/components/organisms/SubTask";

export default {
  methods: {
    ...mapMutations([
      "deleteTask",
      "changeCompleted",
      "setActiveTask",
      "createSubTask",
    ]),
    removeTask(id) {
      this.deleteTask(id);
    },
    changeComp(id) {
      this.changeCompleted(id);
    },
    showInput(event, i) {
      if (event.target.tagName === "INPUT") {
        return;
      }
      this.setActiveTask(i);
      console.log(i);
    },
    submit() {
      this.createSubTask({
        id: Date.now(),
        title: this.title,
        completed: false,
      });
      this.title = "";
    },
  },
  props: {
    todo: {
      type: Object,
      completed: true,
    },
    index: Number,
  },
  data() {
    return {
      title: "",
    };
  },
  filters: {
    upperCase(value) {
      return value[0].toUpperCase() + value.slice(1);
    },
  },
  computed: {
    ...mapGetters(["getActiveTask", "getExistSubTask", "getExistSubTask"]),
  },
  components: {
    SubTask,
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/index.scss";
::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: $color-header-footer;
}
.form {
  display: flex;
  color: black;
}
.item:not(ul) {
  align-items: center;
  background-color: $color-item;
  color: $color-brown;
  padding: 0.81rem 1.25rem;
  border-radius: 0.6rem;
  margin-bottom: 1.56rem;
}
.task:not(:first-child) {
  flex-grow: 1;
  margin-left: 1.5rem;
  align-items: center;
}
.button {
  width: 1.5rem;
  height: 1.5rem;
  border: solid 1.5px $color-header-footer;
  background: transparent;
  color: $color-header-footer;
}
.button:hover {
  @include hover;
}
.done {
  text-decoration: line-through;
}
.input {
  display: none;
}
.customInput {
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  border: solid 1.5px $color-header-footer;
  background: transparent;
  color: $color-header-footer;
  text-align: center;
  cursor: pointer;
}
.customInput:hover {
  @include hover;
}
.input:checked + .customInput {
  background: url("../../assets/image/check.svg") no-repeat center;
}
.task {
  display: flex;
  justify-content: space-between;
}
.subtask {
  display: none;
}
.show {
  display: block;
}
.search {
  background-color: $color-input;
  color: $color-header-footer;
  padding: 0.81rem 1.25rem;
  margin-left: -1.25rem;
  border-radius: 0.6rem;
  width: calc(27rem - 3px);
  border: dashed 1px $color-header-footer;
}
</style>
