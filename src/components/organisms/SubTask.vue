<template>
  <li>
    <div>{{ subtask.title }}</div>
  </li>
</template>

<script>
export default {
  props: {
    subtask: { type: Object },
  },
};
</script>
