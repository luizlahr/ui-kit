import { styled } from '../../styles'
import * as Switch from '@radix-ui/react-switch'

export const SwitchContainer = styled(Switch.Root, {
  all: 'unset',
  position: 'relative',
  width: '$10',
  minWidth: '$10',
  maxWidth: '$10',
  height: '$6',
  backgroundColor: '$blackA9',
  borderRadius: '$pill',
  border: '2px solid $blackA9',
  transition: 'all 300ms',

  '&:focus': {
    borderColor: '$primary10',
  },

  '&:disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$primary10',
    borderColor: '$primary10',
    '&:focus': {
      borderColor: '$blackA10',
    },
  },
})

export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: '$4',
  height: '$4',
  backgroundColor: '$primary11',
  borderRadius: '$pill',
  transition: 'transform 200ms',
  transform: 'translateX(4px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(24px)',
    backgroundColor: '$white',
  },
})
