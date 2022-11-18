import { styled } from '../../styles'
import { Text } from '../Text'

export const FormControlContainer = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const Label = styled(Text, {
  fontWeight: '$regular',
  color: '$input-default-label-color',
})

export const ErrorMessage = styled(Text, {
  color: '$red8',
})
