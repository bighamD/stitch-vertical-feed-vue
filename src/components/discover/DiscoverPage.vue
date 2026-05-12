<script setup lang="ts">
import type { EditorialCollection, Genre, Poster, ReactionState } from './types'
import BottomNav from './BottomNav.vue'
import EditorialCollectionBlock from './EditorialCollection.vue'
import PosterMasonry from './PosterMasonry.vue'
import ReactionRail from './ReactionRail.vue'
import SearchAndGenres from './SearchAndGenres.vue'
import TopBar from './TopBar.vue'

defineProps<{
  genres: Genre[]
  posters: Poster[]
  editorialCollection: EditorialCollection
  activeGenre: string
  searchQuery: string
  savedIds: Set<string>
  reactionState: ReactionState
}>()

const emit = defineEmits<{
  'update:activeGenre': [genreId: string]
  'update:searchQuery': [query: string]
  savePoster: [posterId: string]
  like: []
  save: []
  share: []
  navigate: ['feed' | 'discover' | 'profile']
}>()
</script>

<template>
  <div class="min-h-screen bg-surface-container-lowest pb-28 text-on-surface">
    <TopBar />
    <main class="mx-auto max-w-2xl px-6 pt-6">
      <SearchAndGenres
        :genres="genres"
        :active-genre="activeGenre"
        :search-query="searchQuery"
        @update:active-genre="emit('update:activeGenre', $event)"
        @update:search-query="emit('update:searchQuery', $event)"
      />
      <PosterMasonry :posters="posters" :saved-ids="savedIds" @save="emit('savePoster', $event)" />
      <EditorialCollectionBlock :collection="editorialCollection" />
    </main>

    <div class="fixed bottom-32 right-6 z-40">
      <ReactionRail :state="reactionState" @like="emit('like')" @save="emit('save')" @share="emit('share')" />
    </div>

    <BottomNav active-screen="discover" @navigate="emit('navigate', $event)" />
  </div>
</template>
