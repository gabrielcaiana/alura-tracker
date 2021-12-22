<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <Sidebar />
    </div>
    <div class="column is-three-quarter">
      <Form />
      <div class="list">
        <Task v-for="(i, index) in 4" :key="index" description="teste" :time="20" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import Form from '@/components/Form.vue';
import Task from './components/Task.vue';
export default defineComponent({
    name: "App",
    components: { Sidebar, Form, Task }
});
</script>

<style lang="css" scoped>
.list {
  padding: 1.25rem;
}
</style>
