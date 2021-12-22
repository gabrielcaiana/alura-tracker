<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Stopwatch :timer="timer" />

    <button class="button" @click="start">
      <span class="icon">
        <i class="fas fa-play" />
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finish">
      <span class="icon">
        <i class="fas fa-stop" />
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Stopwatch from "@/components/Stopwatch.vue"

export default defineComponent({
  name: 'Timer',

  components: { Stopwatch },

  data() {
    return {
      timer: 0,
      interval: 0,
    };
  },

  methods: {
    start() {
      this.interval = setInterval(() => (this.timer += 1), 1000);
    },
    finish() {
      clearInterval(this.interval);
    },
  },
});
</script>

<style scoped></style>
