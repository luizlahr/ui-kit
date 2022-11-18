import { Chip } from '@mui/material'
import { styled } from '../../../styles'

export const ChipContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 0.5,
})

export const ChipItem = styled(Chip, {
  display: 'flex',
})
