<template>
  <Box>
    <div class="columns">
      <div class="column is-7">{{ task?.description || 'Tarefa sem descrição' }}</div>
      <div class="column">
        <Stopwatch :timer="task?.duration" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Stopwatch from './Stopwatch.vue';
import Box from './Box.vue';
import ITask from '@/interfaces/ITask'

export default defineComponent({
  name: 'Task',
  components: { Stopwatch, Box },

  props: {
    task: {
      type: Object as PropType<ITask>
    }
  }
});
</script>
