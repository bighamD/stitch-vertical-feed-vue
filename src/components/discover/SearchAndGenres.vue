<script setup lang="ts">
import type { Genre } from './types'
import MaterialIcon from './MaterialIcon.vue'

defineProps<{
  genres: Genre[]
  activeGenre: string
  searchQuery: string
}>()

const emit = defineEmits<{
  'update:activeGenre': [genreId: string]
  'update:searchQuery': [query: string]
}>()

function onSearch(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:searchQuery', target.value)
}
</script>

<template>
  <section>
    <div class="relative mb-8">
      <div class="pointer-events-none absolute inset-y-0 left-4 flex items-center">
        <MaterialIcon name="search" size-class="text-on-surface-variant/60" />
      </div>
      <input
        class="w-full rounded-full border-none bg-surface-container-high py-4 pl-12 pr-6 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/30"
        placeholder="Search for movies, actors, moods..."
        type="text"
        :value="searchQuery"
        @input="onSearch"
      />
    </div>

    <div class="-mx-6 mb-10 flex gap-3 overflow-x-auto px-6 hide-scrollbar">
      <button
        v-for="genre in genres"
        :key="genre.id"
        class="flex-shrink-0 rounded-full px-6 py-2 text-sm font-medium transition-colors"
        :class="
          activeGenre === genre.id
            ? 'bg-primary text-on-primary'
            : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant'
        "
        @click="emit('update:activeGenre', genre.id)"
      >
        {{ genre.label }}
      </button>
    </div>
  </section>
</template>
