<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Stopwatch :timer="timer" />
    <Button icon="fa-play" label="play" :disabled="active" @click="start" />
    <Button icon="fa-stop" label="stop" :disabled="!active" @click="finish" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Stopwatch from "@/components/Stopwatch.vue"
import Button from "@/components/Button.vue"

export default defineComponent({
  name: 'Timer',

  components: { Stopwatch, Button },

  emits: ['timerFinish'],

  data() {
    return {
      timer: 0,
      interval: 0,
      active: false
    };
  },

  methods: {
    start() {
      this.interval = setInterval(() => (this.timer += 1), 1000);
      this.active = true
    },
    finish():void {
      this.active = false
      clearInterval(this.interval);
      this.$emit('timerFinish', this.timer)
      this.timer = 0
    },
  },
});
</script>

<style scoped></style>
