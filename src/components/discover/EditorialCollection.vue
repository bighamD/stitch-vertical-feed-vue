<script setup lang="ts">
import type { EditorialCollection } from './types'
import MaterialIcon from './MaterialIcon.vue'

defineProps<{
  collection: EditorialCollection
}>()
</script>

<template>
  <section class="mb-12">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="font-headline text-2xl font-semibold text-on-surface">Sunday Morning Vibes</h2>
      <span class="text-sm font-medium text-primary">See All</span>
    </div>

    <div class="grid grid-cols-1 gap-6">
      <article class="group relative h-64 overflow-hidden rounded-lg">
        <img
          :alt="collection.alt"
          class="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
          :src="collection.image"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col justify-center p-8">
          <span class="mb-2 text-xs font-bold uppercase tracking-widest text-tertiary">{{ collection.eyebrow }}</span>
          <h3 class="mb-4 max-w-[200px] font-headline text-3xl font-bold leading-tight text-white">
            {{ collection.title }}
          </h3>
          <button class="flex w-fit items-center gap-2 rounded-full bg-primary-container px-6 py-2 text-sm font-medium text-white">
            <MaterialIcon name="play_arrow" filled size-class="text-sm" />
            Watch Now
          </button>
        </div>
      </article>

      <div class="grid grid-cols-2 gap-4">
        <article
          v-for="card in collection.cards"
          :key="card.id"
          class="flex flex-col items-center rounded-lg bg-surface-container-high p-4 text-center"
        >
          <div
            class="mb-3 flex h-12 w-12 items-center justify-center rounded-full"
            :class="card.tone === 'tertiary' ? 'bg-tertiary/20 text-tertiary' : 'bg-primary/20 text-primary'"
          >
            <MaterialIcon :name="card.icon" />
          </div>
          <p class="font-headline font-bold text-on-surface">{{ card.title }}</p>
          <p class="mt-1 text-xs text-on-surface-variant">{{ card.count }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
