<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <Sidebar />
    </div>
    <div class="column is-three-quarter">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
export default defineComponent({
  name: 'App',
  components: { Sidebar }
});
</script>