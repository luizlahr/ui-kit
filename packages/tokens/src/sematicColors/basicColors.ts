import { teal } from '@radix-ui/colors'
import { renameRadixColor } from '../helpers/radix'

export const basicColors: Record<string, string> = {
  ...renameRadixColor('primary', teal),

  'background-default-color': '$grey9',
}
