<template>
  <button
    :class="[
      $style.button,
      { [$style.second]: button.title === getButtonChecked },
    ]"
    @click="chooseButton(button.title)"
  >
    {{ button.title }}
  </button>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  props: {
    button: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["getButtonChecked"]),
  },
  methods: {
    ...mapMutations(["chooseTaskviaButton"]),
    chooseButton(word) {
      this.chooseTaskviaButton(word);
    },
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/index.scss";
.button {
  background: transparent;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: $color-brown;
  opacity: 0.42;
  border: solid 1.5px transparent;
  padding: 1px 0.25rem;
  border-radius: 0.5rem;
}
.button:hover {
  @include hover;
}
.second {
  border: solid 1.5px $color-buttons-footer;
  color: $color-buttons-footer;
}
</style>
