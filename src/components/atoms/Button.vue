<template>
  <button @click="chooseButton(button.title)">{{ button.title }}</button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    button: {
      type: Object,
    },
  },

  methods: {
    ...mapMutations(["chooseTaskviaButton"]),
    chooseButton(word) {
      this.chooseTaskviaButton(word);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index.scss";
button {
  border: none;
  background: transparent;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: $color-brown;
  opacity: 0.42;
}
</style>
