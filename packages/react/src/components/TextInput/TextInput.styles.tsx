import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$input-default-background-color',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $input-default-border-color',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$input-focus-border-color',
  },

  '&:has(input:disabled)': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: 'default',
  fontSize: '$sm',
  color: '$grey4',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: 'default',
  fontSize: '$sm',
  color: '$input-default-text-color',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$input-default-placeholder-color',
  },
})
