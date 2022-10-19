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

  'input-prefix-text-color': '$grey4',

  'invalid-input-default-border-color': '$red8',
  'invalid-input-focus-border-color': '$red11',
} as const
