import { basicColors } from './sematicColors/basicColors'
import { boxColors } from './sematicColors/boxColors'
import { inputColors } from './sematicColors/inputColors'
import { overlaysColors } from './sematicColors/overlaysColors'

export const semanticColors = {
  ...basicColors,

  // INPUT
  ...inputColors,

  // OVERLAYS
  ...overlaysColors,

  // BOX
  ...boxColors,
} as const
