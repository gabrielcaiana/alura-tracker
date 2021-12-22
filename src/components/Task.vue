<template>
  <div class="box task has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{ description }}</div>
      <div class="column">
        <Stopwatch :timer="time" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Stopwatch from './Stopwatch.vue';

export default defineComponent({
  name: 'Task',
  components: { Stopwatch },

  props: {
    description: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: true
    }
  }
});
</script>

<style scoped>
.task {
  background-color: #FAF0CA;
}
</style>
