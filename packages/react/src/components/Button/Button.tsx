import { styled } from '../../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$1',

  cursor: 'pointer',

  transition: 'all 300ms ease-out',

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      default: {
        color: '$grey5',
        background: '$grey1',

        '&:not(:disabled):hover': {
          background: '$grey3',
        },

        '&:disabled': {
          opacity: '0.5',
          cursor: 'not-allowed',
        },
      },

      primary: {
        color: '$white',
        background: '$primary10',

        '&:not(:disabled):hover': {
          background: '$primary11',
        },

        '&:disabled': {
          opacity: '0.5',
          cursor: 'not-allowed',
        },
      },

      link: {
        color: '$primary10',
        background: 'transparent',

        '&:not(:disabled):hover': {
          color: '$primary11',
        },

        '&:disabled': {
          opacity: '0.5',
          cursor: 'not-allowed',
        },
      },
    },
    size: {
      sm: {
        padding: '0 $3',
        height: 36,
      },

      md: {
        padding: '0 $4',
        height: 40,
      },

      lg: {
        padding: '0 $6',
        height: 48,
      },
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

Button.displayName = 'Button'
