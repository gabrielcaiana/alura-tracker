<template>
  <section>
    <strong>{{ currentTime }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StopWatch',

  props: {
    timer: {
      type: Number,
      default: 0
    },
  },

  computed: {
    currentTime(): string {
      return new Date(this.timer * 1000).toISOString().substring(11, 19);
    },
  },
});
</script>

<style scoped></style>
