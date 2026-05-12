<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue'
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-outline-variant/10 bg-surface/60 backdrop-blur-xl">
    <div class="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
      <div class="flex items-center gap-3">
        <MaterialIcon name="movie" size-class="text-primary" />
        <h1 class="font-headline text-2xl font-bold tracking-tight">CineSwipe</h1>
      </div>
      <button
        class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-container-highest"
        aria-label="Search"
      >
        <MaterialIcon name="search" size-class="text-on-surface" />
      </button>
    </div>
  </header>
</template>
