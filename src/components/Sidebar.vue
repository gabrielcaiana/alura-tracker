<template>
  <header>
    <h1>Alura Tracker</h1>
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tasks</router-link
          >
        </li>
        <li>
          <router-link to="/projects" class="link">
            <i class="fas fa-project-diagram"></i>
            Projects</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
});
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

.nav ul {
  margin-top: 2rem;
  padding: 0 2rem;
}

.nav ul li {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}

nav ul li .link {
  color: #fff;
}

nav ul li .link i {
  margin-right: 0.5rem;
}
</style>
