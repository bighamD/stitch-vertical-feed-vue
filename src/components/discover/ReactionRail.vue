<script setup lang="ts">
import type { ReactionState } from './types'
import MaterialIcon from './MaterialIcon.vue'

defineProps<{
  state: ReactionState
  compact?: boolean
}>()

const emit = defineEmits<{
  like: []
  save: []
  share: []
}>()
</script>

<template>
  <div class="flex flex-col gap-4" :class="compact ? 'items-center' : ''">
    <div class="flex flex-col items-center gap-1">
      <button
        class="flex rounded-full backdrop-blur-md transition-colors"
        :class="[
          compact ? 'h-14 w-14' : 'h-12 w-12',
          state.liked ? 'bg-primary text-on-primary shadow-neon' : 'bg-surface-container-highest/80 text-on-surface hover:text-primary',
          'items-center justify-center border border-outline-variant/10',
        ]"
        aria-label="Like"
        @click="emit('like')"
      >
        <MaterialIcon name="favorite" :filled="state.liked" :size-class="compact ? 'text-3xl' : ''" />
      </button>
      <span class="text-[10px] font-medium text-on-surface-variant">{{ state.likes.toLocaleString() }}</span>
    </div>

    <div class="flex flex-col items-center gap-1">
      <button
        class="flex rounded-full backdrop-blur-md transition-colors"
        :class="[
          compact ? 'h-14 w-14' : 'h-12 w-12',
          state.saved ? 'bg-surface-bright text-primary shadow-neon' : 'bg-surface-container-highest/80 text-on-surface hover:text-primary',
          'items-center justify-center border border-outline-variant/10',
        ]"
        aria-label="Save"
        @click="emit('save')"
      >
        <MaterialIcon name="add_to_photos" :filled="state.saved" :size-class="compact ? 'text-3xl' : ''" />
      </button>
      <span class="text-[10px] font-medium text-on-surface-variant">{{ state.saves.toLocaleString() }}</span>
    </div>

    <div class="flex flex-col items-center gap-1">
      <button
        class="flex rounded-full border border-outline-variant/10 bg-surface-container-highest/80 text-on-surface backdrop-blur-md transition-colors hover:text-primary"
        :class="compact ? 'h-14 w-14' : 'h-12 w-12'"
        aria-label="Share"
        @click="emit('share')"
      >
        <MaterialIcon name="share" :size-class="compact ? 'text-3xl' : ''" />
      </button>
      <span class="text-[10px] font-medium text-on-surface-variant">Share</span>
    </div>
  </div>
</template>
