export type AppScreen = 'feed' | 'discover' | 'profile'

export interface Genre {
  id: string
  label: string
}

export interface Poster {
  id: string
  title: string
  genre: string
  year: string
  image: string
  alt: string
  mood: string
}

export interface EditorialCollection {
  eyebrow: string
  title: string
  image: string
  alt: string
  cards: Array<{
    id: string
    title: string
    count: string
    icon: string
    tone: 'tertiary' | 'primary'
  }>
}

export interface FeedFeature {
  titleLines: string[]
  badge: string
  logline: string
  image: string
  alt: string
}

export interface ReactionState {
  liked: boolean
  saved: boolean
  likes: number
  saves: number
}
