import type { EditorialCollection, FeedFeature, Genre, Poster } from '../components/discover/types'

const posterImages = {
  neonPulse:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDayhRNsfMRQpE2mfI3yecVRvrifRWtmuw-RYSZ9-nifo1gDar4qCuCeODLzJ7UBpNSlqLF5PeI7Gkg9GSi2R8-4Ylq_tc5WyNoLFEZiLCnbMgOTZEEw7ACkHzl3F7nT-n_Q_1zZwLvCzXwFwnXN6OC1Hrs4HJ8KHkUAQH1WSkOUoRtubGWEbt6gespkZzA2xpwZR0cql0-H_WIeYORvKafNeVDJEZtulDR3xLulT_35T4nLYxTq2YHdvmmOt9o1BVdaYslWMx-6ME',
  shutterSpeed:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDkt4kkLiPG5d-HLW1w6dh-P92CLbMq0NoVB9d6xuUqHVkRIQSvOAqEcc0EDc8JTDS-wmchGSDWlVLB8ENT3NDM3eZEjujO8fKUvunZKy1VZZUvF2-v-rjX4BzrjjTBJ_pY5l5sl0j8kRT6Wl7Uh7yCC9ryBr7QnAFZ87z7N1J91MQ6Q03VCVqZTSWtxIo0Ssl00ybuzns0iHEnEO7Whr7Lb6pQqA4gEoWTe8FFziJZBUNJ6QElFGBsa7-2Stwpq1mX9gAfhT-m0Mk',
  rainyAlley:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBja80OydzDgQ1FIxPjKXoQvl9cQLX7YDLtpDevEaiQy0RbXTJFnrTJ8fA2t31jnUIzIV5Yqut_E72LSvHnz_ptyQmqHJahuERre2KnX4lyPm1FaBpvJp73A3oSUFgo0DIPxF-RlAkG2CHWCyYFGRsqyNUb4AD_S04Kr5Qg9SMbMPiHILIDfsv4Y7lpG6ZX48n3wIclO9h6un2toeKamMCsb6CmTChxlXIgIF9wU8NWMIdHIR3k9rly30aE6N9_IHmpDgXh8J3dbCQ',
  ghostShell:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAyLgciTtUAkpqA3XH8LJdBT4ZuI9JDT5AxyslZHJ6aq7bkkCNiyrx25xOiLyPWXIIDMSd1gjNmDXdiLZ1hcqPujHipEya1WcDAsKRTuHv5Gb7sNRUw-gs0JyEralJSicGR7nJSAzWYuyulQclkVZZ8oMqSDIGwbZfAMSEQ5k9xz0LVXaPZAJYS2m-ZZ_XdhVOlPVZGiTqtIosKW4rmnTmGNXnph6j2HWpcmzTUcq5LeeLNPt0hRxrK3aIc3mUT2dQ0v-oSSUmRJwA',
  quiet:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDcPTPuu9G3RqDD8BipCZ_ICujtKmkA1HxvPzW5m0PC6UzgpDO6M-xadIh_tTc4VldxNBRS8Ze56L2zp8yklTkEZ_MMERfPruk1itPOSOWpNriUZTrZP-LRJ0nKa_gFJwswEcr_Z0Pnp4w89mOu-zeCGeq_S1ZCVQkq_E1v5Tj0LU_16WcU7Qnpswp46Ow_gyKDphpHr8zHn_bDlxZlSeF1OsV2ZmmZqxiKqUCnuCwD9h-9BZunywVIXX2OHnozhjau3GxU2coiF2g',
  feed:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDJo5kFl-F9sshg3j98peSjCuXus1ODOk32llARHSb4ZbV3WDDAlRO4zJ9opsMUWuagdzrcBhGlAsv2ep7sPqvM4N5IjxeSWIEDiTA3ri7vWDc-fZS90E2R67bydx7eO7r412LUneQHJSvifJH-7taVYvScB80Jozl-eOBsUCmQ2m81XkY9NvJuo383R5loOOdz2YH__f9MGWTVVsoNda1lxfHkIXccEeWA9_CuKMnN0PYSud1wDDSFHw5h_2lzaiaFIehJ4g39Lkk',
}

const genres: Genre[] = [
  { id: 'all', label: 'All' },
  { id: 'cyberpunk', label: 'Cyberpunk' },
  { id: 'neo-noir', label: 'Neo-Noir' },
  { id: 'psychological', label: 'Psychological' },
  { id: 'space-opera', label: 'Space Opera' },
  { id: 'retro-future', label: 'Retro-Future' },
]

const posters: Poster[] = [
  {
    id: 'neon-pulse',
    title: 'Neon Pulse',
    genre: 'Thriller',
    year: '2024',
    mood: 'cyberpunk',
    image: posterImages.neonPulse,
    alt: 'Cinematic movie poster with moody neon lighting',
  },
  {
    id: 'shutter-speed',
    title: 'Shutter Speed',
    genre: 'Action',
    year: '2023',
    mood: 'retro-future',
    image: posterImages.shutterSpeed,
    alt: 'Abstract cinematic motion blur artwork',
  },
  {
    id: 'rainy-alley',
    title: 'Rainy Alley',
    genre: 'Noir',
    year: '2024',
    mood: 'neo-noir',
    image: posterImages.rainyAlley,
    alt: 'Moody dark urban street cinematic shot',
  },
  {
    id: 'ghost-shell',
    title: 'Ghost Shell',
    genre: 'Sci-Fi',
    year: '2024',
    mood: 'space-opera',
    image: posterImages.ghostShell,
    alt: 'Modern high contrast futuristic movie poster',
  },
]

const editorialCollection: EditorialCollection = {
  eyebrow: 'Curated Collection',
  title: 'Quiet Contemplation',
  image: posterImages.quiet,
  alt: 'Soft morning light filtering through window',
  cards: [
    { id: 'feel-good', title: 'Feel Good', count: '12 Movies', icon: 'coffee', tone: 'tertiary' },
    { id: 'indie-gold', title: 'Indie Gold', count: '8 Movies', icon: 'auto_awesome', tone: 'primary' },
  ],
}

const feedFeature: FeedFeature = {
  badge: 'Sci-Fi Thriller',
  titleLines: ['NEON', 'DREAMS'],
  logline:
    'In a city that never sleeps, memories are the only currency left. One man discovers a secret that could bankrupt the soul.',
  image: posterImages.feed,
  alt: 'Dramatic cinematic movie trailer still with dark atmosphere',
}

export function useCineSwipeData() {
  return {
    genres,
    posters,
    editorialCollection,
    feedFeature,
  }
}
