<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <Sidebar />
    </div>
    <div class="column is-three-quarter">
      <Form @save="saveTask" />
      <div class="list">
        <Task v-for="(task, index) in tasks" :key="index" :task="task" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import Form from '@/components/Form.vue';
import Task from './components/Task.vue';
import ITask from '@/interfaces/ITask'
export default defineComponent({
    name: "App",
    components: { Sidebar, Form, Task },

    data() {
      return {
        tasks: [] as ITask[]
      }
    },

   methods: {
      saveTask(task: ITask) {
      this.tasks.push(task)
      console.log(this.tasks)
    }
   }
});
</script>

<style lang="css" scoped>
.list {
  padding: 1.25rem;
}
</style>
