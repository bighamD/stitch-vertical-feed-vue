<script setup lang="ts">
defineProps<{
  name: string
  filled?: boolean
  sizeClass?: string
}>()
</script>

<template>
  <span
    class="material-symbols-outlined"
    :class="sizeClass"
    :style="{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24` }"
    aria-hidden="true"
  >
    {{ name }}
  </span>
</template>
