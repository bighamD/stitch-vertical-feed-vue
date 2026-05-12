<script setup lang="ts">
import type { AppScreen } from './types'
import MaterialIcon from './MaterialIcon.vue'

const navItems: Array<{ id: AppScreen; label: string; icon: string }> = [
  { id: 'feed', label: 'Feed', icon: 'play_circle' },
  { id: 'discover', label: 'Discover', icon: 'explore' },
  { id: 'profile', label: 'Profile', icon: 'person' },
]

defineProps<{
  activeScreen: AppScreen
}>()

const emit = defineEmits<{
  navigate: [screen: AppScreen]
}>()
</script>

<template>
  <nav
    class="fixed bottom-6 left-1/2 z-50 flex w-[90%] max-w-md -translate-x-1/2 items-center justify-between rounded-full border border-outline-variant/20 bg-surface-container-low/70 px-8 py-4 shadow-2xl backdrop-blur-2xl"
    aria-label="Primary"
  >
    <button
      v-for="item in navItems"
      :key="item.id"
      class="group flex flex-col items-center gap-1 transition-opacity"
      :class="activeScreen === item.id ? 'text-primary' : 'text-on-surface-variant hover:text-primary'"
      @click="emit('navigate', item.id)"
    >
      <span class="relative">
        <span
          v-if="activeScreen === item.id"
          class="absolute inset-0 scale-150 rounded-full bg-primary/20 blur-md"
        ></span>
        <MaterialIcon :name="item.icon" :filled="activeScreen === item.id" size-class="relative z-10" />
      </span>
      <span class="text-[10px] font-medium tracking-wide">{{ item.label }}</span>
    </button>
  </nav>
</template>
