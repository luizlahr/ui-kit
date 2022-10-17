import { teal } from '@radix-ui/colors'
import { renameRadixColor } from './helpers/radix'

export const semanticColors = {
  ...renameRadixColor('primary', teal),
} as const
