<script setup lang="ts">
import type { AppScreen, FeedFeature, ReactionState } from './types'
import BottomNav from './BottomNav.vue'
import MaterialIcon from './MaterialIcon.vue'
import ReactionRail from './ReactionRail.vue'

defineProps<{
  feature: FeedFeature
  reactionState: ReactionState
}>()

const emit = defineEmits<{
  like: []
  save: []
  share: []
  navigate: [screen: AppScreen]
}>()
</script>

<template>
  <div class="relative h-screen min-h-[760px] overflow-hidden bg-surface-container-lowest text-on-surface">
    <div class="fixed inset-0 z-0 overflow-hidden">
      <img :alt="feature.alt" class="h-full w-full object-cover" :src="feature.image" />
      <div class="vertical-gradient-overlay absolute inset-0 opacity-90"></div>
      <div class="side-gradient-overlay absolute inset-y-0 right-0 w-32 opacity-60"></div>
    </div>

    <div class="pointer-events-none fixed inset-x-0 top-0 z-40 flex h-12 items-center justify-between px-8 opacity-80">
      <span class="text-sm font-medium">9:41</span>
      <div class="flex items-center gap-2">
        <MaterialIcon name="signal_cellular_4_bar" size-class="text-lg" />
        <MaterialIcon name="wifi" size-class="text-lg" />
        <MaterialIcon name="battery_full" size-class="text-lg" />
      </div>
    </div>

    <main class="relative z-10 flex h-screen flex-col justify-end px-6 pb-32">
      <div class="absolute bottom-48 right-4 z-20">
        <ReactionRail compact :state="reactionState" @like="emit('like')" @save="emit('save')" @share="emit('share')" />
      </div>

      <section class="max-w-md space-y-4">
        <div class="inline-flex items-center rounded-full border border-tertiary/20 bg-tertiary-container/30 px-3 py-1">
          <span class="text-[10px] font-bold uppercase tracking-widest text-tertiary">{{ feature.badge }}</span>
        </div>
        <h1 class="font-headline text-5xl font-bold leading-none tracking-tight text-on-surface md:text-6xl">
          <span v-for="line in feature.titleLines" :key="line" class="block">{{ line }}</span>
        </h1>
        <p class="max-w-[85%] text-base leading-relaxed text-on-surface-variant">
          {{ feature.logline }}
        </p>
        <div class="flex items-center gap-4 pt-4">
          <button
            class="flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-primary-container px-8 py-4 font-bold text-on-primary shadow-neon transition-transform active:scale-95"
          >
            <MaterialIcon name="play_arrow" filled size-class="text-xl" />
            Watch Now
          </button>
          <button class="glass-panel rounded-full px-6 py-4 font-medium text-on-surface transition-transform active:scale-95">
            More Info
          </button>
        </div>
      </section>
    </main>

    <BottomNav active-screen="feed" @navigate="emit('navigate', $event)" />
  </div>
</template>
