import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$input-default-background-color',
  padding: '0 $4',
  height: '$10',
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

  variants: {
    isInvalid: {
      true: {
        '&:has(:not(input:disabled))': {
          borderColor: '$invalid-input-default-border-color',
        },

        '&:has(input:focus)': {
          borderColor: '$invalid-input-focus-border-color',
        },
      },
    },
  },
})

export const Prefix = styled('span', {
  fontFamily: 'default',
  fontSize: '$sm',
  color: '$input-prefix-text-color',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: 'default',
  fontSize: '$sm',
  color: '$input-default-text-color',
  fontWeight: '$regular',
  background: 'inherit',
  border: 0,
  width: '100%',
  height: 'calc(100% - 2px)',

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
