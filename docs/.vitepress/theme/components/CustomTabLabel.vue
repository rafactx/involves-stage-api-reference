<template>
  <span style="display: inline-flex; align-items: center; gap: 6px;">
    <img :src="src" :alt="alt" width="16" height="16" />
    <slot />
  </span>
</template>

<script setup>
defineProps({
  src: String,
  alt: String
})
</script>
