<template>
  <div class="box task has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{ task?.description }}</div>
      <div class="column">
        <Stopwatch :timer="task?.duration" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Stopwatch from './Stopwatch.vue';
import ITask from '@/interfaces/ITask'

export default defineComponent({
  name: 'Task',
  components: { Stopwatch },

  props: {
    task: {
      type: Object as PropType<ITask>
    }
  }
});
</script>

<style scoped>
.task {
  background-color: #FAF0CA;
}
</style>
