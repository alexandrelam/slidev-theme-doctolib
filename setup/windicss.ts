import { resolve } from 'node:path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '../**/*.{vue,ts}'),
    ],
  },
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#e0e0e0])',
    // surface backgrounds for dark mode
    'bg-surface': 'bg-white dark:bg-[#1e1e1e]',
    'bg-surface-elevated': 'bg-gray-50 dark:bg-[#2d2d2d]',
    // text colors for dark mode
    'text-primary': 'text-[#00264C] dark:text-[#e0e0e0]',
    'text-secondary': 'text-gray-600 dark:text-[#a0a0a0]',
    'text-brand': 'text-[#107ACA] dark:text-[#8cc8ff]',
    // border colors for dark mode
    'border-main': 'border-gray-200 dark:border-gray-700',
    'border-light': 'border-gray-100 dark:border-gray-800',
  },
}))
