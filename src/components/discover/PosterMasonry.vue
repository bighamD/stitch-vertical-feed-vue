<script setup lang="ts">
import type { Poster } from './types'
import MaterialIcon from './MaterialIcon.vue'

defineProps<{
  posters: Poster[]
  savedIds: Set<string>
}>()

const emit = defineEmits<{
  save: [posterId: string]
}>()
</script>

<template>
  <section class="mb-12">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="font-headline text-2xl font-semibold text-on-surface">Late Night Thrills</h2>
      <span class="text-sm font-medium text-primary">See All</span>
    </div>

    <div v-if="posters.length" class="columns-2 gap-4">
      <article
        v-for="poster in posters"
        :key="poster.id"
        class="mb-4 break-inside-avoid overflow-hidden rounded-lg bg-surface-container shadow-2xl"
      >
        <div class="group relative">
          <img
            :alt="poster.alt"
            class="w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
            :src="poster.image"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80"></div>
          <button
            class="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest/60 text-on-surface backdrop-blur-md transition-colors hover:text-primary"
            :class="{ 'text-primary': savedIds.has(poster.id) }"
            :aria-label="`Save ${poster.title}`"
            @click="emit('save', poster.id)"
          >
            <MaterialIcon name="add_to_photos" :filled="savedIds.has(poster.id)" size-class="text-[22px]" />
          </button>
          <div class="absolute bottom-4 left-4 right-4">
            <p class="font-headline text-lg font-bold leading-tight">{{ poster.title }}</p>
            <p class="mt-1 text-xs text-on-surface-variant">{{ poster.genre }} • {{ poster.year }}</p>
          </div>
        </div>
      </article>
    </div>

    <div v-else class="rounded-lg bg-surface-container-high p-8 text-center text-on-surface-variant">
      No films match that cut.
    </div>
  </section>
</template>
