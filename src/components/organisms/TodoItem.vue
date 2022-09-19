<template>
  <li :class="$style.item">
    <label> &check; <input :class="$style.input" type="checkbox" /></label>
    <div :class="$style.task">
      {{ todo.title }}
    </div>
    <button @click="removeTask(todo.id)" :class="$style.button">&times;</button>
  </li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["deleteTask"]),
    removeTask(id) {
      console.log(id);
      this.deleteTask(id);
    },
  },
  props: {
    todo: {
      type: Object,
      completed: true,
    },
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/index.scss";
.item {
  display: flex;
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
button:hover {
  color: $color-button-pressed;
  border: solid 1.5px $color-button-pressed;
}
.done {
  text-decoration: line-through;
}
.input {
  display: none;
}
label:first-child {
  width: 1.3rem;
  height: 1.3rem;
  border: solid 1.5px $color-header-footer;
  background: transparent;
  color: $color-header-footer;
  text-align: center;
}
</style>
