<script setup lang="ts">
import BottomNav from './BottomNav.vue'
import MaterialIcon from './MaterialIcon.vue'
import type { AppScreen } from './types'

const emit = defineEmits<{
  navigate: [screen: AppScreen]
}>()
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-surface-container-lowest px-6 pb-28 text-on-surface">
    <section class="max-w-md rounded-lg bg-surface-container p-8 text-center shadow-glass">
      <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
        <MaterialIcon name="person" size-class="text-4xl" />
      </div>
      <h1 class="font-headline text-3xl font-bold">Curator Profile</h1>
      <p class="mt-3 text-sm leading-6 text-on-surface-variant">
        Profile is included to make the navigation feel real. The restoration focus stays on the Stitch Discover and Vertical Feed screens.
      </p>
    </section>
    <BottomNav active-screen="profile" @navigate="emit('navigate', $event)" />
  </div>
</template>
