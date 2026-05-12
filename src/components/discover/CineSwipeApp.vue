<script setup lang="ts">
import { computed, reactive, shallowRef } from 'vue'
import { useCineSwipeData } from '../../composables/useCineSwipeData'
import DiscoverPage from './DiscoverPage.vue'
import ProfilePlaceholder from './ProfilePlaceholder.vue'
import VerticalFeedPage from './VerticalFeedPage.vue'
import type { AppScreen, ReactionState } from './types'

const { genres, posters, editorialCollection, feedFeature } = useCineSwipeData()

const activeScreen = shallowRef<AppScreen>('discover')
const activeGenre = shallowRef('all')
const searchQuery = shallowRef('')
const notice = shallowRef('')

const savedPosterIds = reactive(new Set<string>())
const reactionState = reactive<ReactionState>({
  liked: false,
  saved: false,
  likes: 12400,
  saves: 842,
})

const filteredPosters = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return posters.filter((poster) => {
    const matchesGenre = activeGenre.value === 'all' || poster.mood === activeGenre.value
    const searchable = `${poster.title} ${poster.genre} ${poster.year} ${poster.mood}`.toLowerCase()
    const matchesSearch = !query || searchable.includes(query)

    return matchesGenre && matchesSearch
  })
})

function navigate(screen: AppScreen) {
  activeScreen.value = screen
}

function toggleLike() {
  reactionState.liked = !reactionState.liked
  reactionState.likes += reactionState.liked ? 1 : -1
}

function toggleSave() {
  reactionState.saved = !reactionState.saved
  reactionState.saves += reactionState.saved ? 1 : -1
}

function togglePosterSave(posterId: string) {
  if (savedPosterIds.has(posterId)) {
    savedPosterIds.delete(posterId)
    return
  }

  savedPosterIds.add(posterId)
}

function shareCurrentScreen() {
  notice.value = activeScreen.value === 'feed' ? 'Feed teaser ready to share' : 'Discover cut ready to share'
  window.setTimeout(() => {
    notice.value = ''
  }, 1800)
}
</script>

<template>
  <DiscoverPage
    v-if="activeScreen === 'discover'"
    :genres="genres"
    :posters="filteredPosters"
    :editorial-collection="editorialCollection"
    :active-genre="activeGenre"
    :search-query="searchQuery"
    :saved-ids="savedPosterIds"
    :reaction-state="reactionState"
    @update:active-genre="activeGenre = $event"
    @update:search-query="searchQuery = $event"
    @save-poster="togglePosterSave"
    @like="toggleLike"
    @save="toggleSave"
    @share="shareCurrentScreen"
    @navigate="navigate"
  />

  <VerticalFeedPage
    v-else-if="activeScreen === 'feed'"
    :feature="feedFeature"
    :reaction-state="reactionState"
    @like="toggleLike"
    @save="toggleSave"
    @share="shareCurrentScreen"
    @navigate="navigate"
  />

  <ProfilePlaceholder v-else @navigate="navigate" />

  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-3 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-3 opacity-0"
  >
    <div
      v-if="notice"
      class="fixed left-1/2 top-6 z-[60] -translate-x-1/2 rounded-full bg-surface-container-highest px-5 py-3 text-sm font-medium text-on-surface shadow-glass"
    >
      {{ notice }}
    </div>
  </Transition>
</template>
