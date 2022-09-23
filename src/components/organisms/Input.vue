<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="Add new task" v-model="title" />
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapMutations(["createTask"]),
    submit() {
      this.createTask({
        id: Date.now(),
        title: this.title,
        completed: false,
        subtasks: [],
      });
      this.title = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
input {
  background-color: $color-input;
  color: $color-header-footer;
  padding: 0.81rem 1.25rem;
  border-radius: 0.6rem;
  width: 92%;
  border: dashed 1px $color-header-footer;
}
::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
  color: $color-header-footer;
}
input:hover {
  border: solid 1px $color-header-footer;
}
</style>
