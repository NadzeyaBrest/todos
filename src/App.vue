<template>
  <div :id="$style.app">
    <div :class="$style.wrapper">
      <div :class="$style.table">
        <Header />
        <div :class="$style.content">
          <TodoList />
          <Input />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/atoms/Header";
import TodoList from "@/components/organisms/TodoList";
import Footer from "@/components/organisms/Footer";
import Input from "@/components/organisms/Input";

export default {
  name: "App",
  components: {
    Header,
    TodoList,
    Footer,
    Input,
  },
};
</script>

<style lang="scss" module>
@import "./assets/styles/index.scss";
@import "./assets/styles/index.scss";
body {
  background: linear-gradient(
    104.11deg,
    $main-color-red 14.52%,
    $main-color-orange 87.26%
  );
}
.wrapper {
  padding: 4rem 0;
  max-width: 58rem;
  margin: 0 auto;
  background: url("./assets/image/list.svg") top 4rem right no-repeat;
  height: 100vh;
}
.table {
  display: flex;
  flex-direction: column;
  width: 33rem;
  min-height: 27rem;
  margin: 0 auto;
  padding: 1.8rem;
}
.content {
  background-color: $color-bright;
  flex: 1 1 auto;
  padding: 1.8rem;
}
</style>
