<template>
  <div class="box task has-text-weight-bold">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Box'
})
</script>

<style scoped>
.task {
  background-color: #FAF0CA;
}
</style>