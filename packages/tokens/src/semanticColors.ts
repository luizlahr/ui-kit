import { teal } from '@radix-ui/colors'
import { renameRadixColor } from './helpers/radix'

export const semanticColors = {
  ...renameRadixColor('primary', teal),

  // INPUT
  'input-default-text-color': '$white',
  'input-default-placeholder-color': '$grey4',
  'input-default-background-color': '$grey9',
  'input-default-border-color': '$grey9',
  'input-focus-border-color': '$primary10',
} as const
