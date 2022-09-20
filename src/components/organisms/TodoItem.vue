<template>
  <li :class="$style.item">
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
      <div @click="showInput(index)" :class="$style.task">
        {{ todo.title | upperCase }}
      </div>
      <button @click="removeTask(todo.id)" :class="$style.button">
        &times;
      </button>
    </div>
    <div :class="[$style.subtask, { [$style.show]: index === getActiveTask }]">
      <ul></ul>
      <form @submit.prevent="submit">
        <input type="text" placeholder="Add new task" v-model="title" />
      </form>
    </div>
  </li>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "deleteTask",
      "changeCompleted",
      "setActiveTask",
      "createSubTask",
      "pushSubTask",
    ]),
    removeTask(id) {
      this.deleteTask(id);
    },
    changeComp(id) {
      this.changeCompleted(id);
    },
    showInput(i) {
      this.setActiveTask(i);
      console.log(i);
    },
    submit() {
      // вот здесь мне непонятно, как установить зависимость от геттера) Просто я хочу проверить, если есть поле сабзадач, я буду в него пушить, а нету, я создам. Можешь подскажешь идею)
      // if ( getExistSubTask  === -1) {
      //   this.createSubTask({
      //     id: Date.now(),
      //     title: this.title,
      //     completed: false,
      //   });
      // } else {
      //   this.pushSubTask({
      //     id: Date.now(),
      //     title: this.title,
      //     completed: false,
      //   });
      // }
      this.createSubTask({
        id: Date.now(),
        title: this.title,
        completed: false,
      });
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
    ...mapGetters(["getActiveTask", "getExistSubTask"]),
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/index.scss";
.item {
  align-items: center;
  background-color: $color-item;
  color: $color-brown;
  padding: 0.81rem 1.25rem;
  border-radius: 0.6rem;
  margin-bottom: 1.56rem;
}
.task {
  flex-grow: 1;
  margin-left: 1.5rem;
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
</style>
