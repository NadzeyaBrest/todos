<template>
  <li :class="$style.item">
    <label>
      <input
        @change="changeSubtaskCompl(subtask.id)"
        :checked="subtask.completed"
        :class="$style.input"
        type="checkbox"
      />
      <span :class="$style.customInput"></span>
    </label>
    <div :class="$style.task">{{ subtask.title }}</div>
    <button @click="removeSubTask(subtask.id)" :class="$style.button">
      &times;
    </button>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    subtask: { type: Object },
  },
  methods: {
    ...mapMutations(["changeSubtaskCompleted", "deleteSubTask"]),
    changeSubtaskCompl(id) {
      this.changeSubtaskCompleted(id);
    },
    removeSubTask(id) {
      this.deleteSubTask(id);
    },
  },
};
</script>
<style lang="scss" module>
@import "../../assets/styles/index.scss";
.item {
  display: flex;
  align-items: center;
  background-color: $color-subtasks;
  color: $color-brown;
  min-height: 3.125rem;
  padding: 0 1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
  border: 1px solid $color-item;
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
</style>
