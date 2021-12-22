<template>
  <header>
    <h1>Alura Tracker</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Sidebar'
})
</script>

<style lang="css" scoped>
  header {
    background: #0d3b66;
    width: 100%;
    height: 100vh;
  }

  h1 {
    color: #fff;
    text-align: center;
    padding: 2rem 0;
    font-size: 1.4rem;
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
</style>