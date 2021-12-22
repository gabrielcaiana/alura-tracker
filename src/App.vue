<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <Sidebar />
    </div>
    <div class="column is-three-quarter">
      <Form @save="saveTask" />
      <div class="list">
        <Task v-for="(task, index) in tasks" :key="index" :task="task" />
        <Box v-if="emptyList">
          Você ainda não realizou nenhuma tarefa :(
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import Form from '@/components/Form.vue';
import Task from './components/Task.vue';
import ITask from '@/interfaces/ITask';
import Box from './components/Box.vue';
export default defineComponent({
  name: 'App',
  components: { Sidebar, Form, Task, Box },

  data() {
    return {
      tasks: [] as ITask[],
    };
  },

  computed: {
    emptyList():boolean {
      return this.tasks.length === 0
    }
  },

  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
      console.log(this.tasks);
    },
  },
});
</script>

<style lang="css" scoped>
.list {
  padding: 1.25rem;
}
</style>
