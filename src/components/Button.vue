<template>
  <button class="button" :disabled="disabled">
    <span class="icon">
      <i :class="`fas ${icon}`" />
    </span>
    <span>{{ label }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',

  props: {
    icon: {
      type: String,
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>