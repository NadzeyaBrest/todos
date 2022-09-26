<template>
  <footer :class="$style.footer">
    <div>{{ getLength }}</div>
    <div :class="$style.buttons">
      <Button
        v-for="button of getAllButton"
        :key="button.id"
        :button="button"
      />
    </div>
  </footer>
</template>

<script>
import Button from "../atoms/Button";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getAllButton", "getLength"]),
  components: {
    Button,
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/index.scss";
.footer {
  background: $color-header-footer;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: $color-brown;
  padding: 0.7rem 0;
  display: flex;
  padding: 1.8rem;
  justify-content: space-between;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
}
.buttons :not(button:first-child) {
  margin-left: 1.5rem;
}
</style>
