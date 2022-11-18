import { styled } from '../../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$grey9',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $grey9',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$primary10',
  },

  '&:disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$grey4',
  },

  variants: {
    isInvalid: {
      true: {
        '&:not(:disabled)': {
          borderColor: '$invalid-input-default-border-color',
        },

        '&:focus': {
          borderColor: '$invalid-input-focus-border-color',
        },
      },
    },
  },
})

TextArea.displayName = 'TextArea'
