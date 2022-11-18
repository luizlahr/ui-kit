import { CaretDown } from 'phosphor-react'
import { styled } from '../../../styles'

export const Icon = styled(CaretDown, {
  padding: '0 $1',
  transition: 'transform 200ms ease',

  '&.MuiSelect-iconOpen': {
    transform: 'rotate(180deg)',
  },
})
