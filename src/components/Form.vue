<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para cadastro de uma nova tarefa"
      >
        <input
          v-model="description"
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
      <div class="column">
        <Timer @timerFinish="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Timer from './Timer.vue';
export default defineComponent({
  name: 'Form',

  components: { Timer },

  emits: ['save'],

  data() {
    return {
      description: ''
    }
  },

  methods: {
    finishTask(time:number):void {     
      this.$emit('save', {
        duration: time,
        description: this.description
      }) 
      this.description = ''
    }
  }
});
</script>
