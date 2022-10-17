import {
  blackA,
  blue,
  green,
  orange,
  red,
  teal,
  whiteA,
} from '@radix-ui/colors'
import { semanticColors } from './semanticColors'

console.log(semanticColors)

export const colors = {
  white: '#FFFFFF',
  black: '#000000',

  grey1: '#E1E1E6',
  grey2: '#C4C4CC',
  grey3: '#8D8D99',
  grey4: '#7C7C8A',
  grey5: '#505059',
  grey6: '#323238',
  grey7: '#29292E',
  grey8: '#202024',
  grey9: '#121214',
  grey10: '#09090A',

  ...blackA,
  ...whiteA,
  ...orange,
  ...blackA,
  ...teal,
  ...green,
  ...blue,
  ...red,

  ...semanticColors,
} as const

console.log(colors)
