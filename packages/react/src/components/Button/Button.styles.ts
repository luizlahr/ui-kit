import { keyframes, styled } from '../../styles'

export const ButtonContent = styled('section', {
  display: 'flex',
  transition: 'opacity 300ms ease',
  gap: '$1',
})

const loader = keyframes({
  '100%': { transform: 'rotate(360deg)' },
})

export const LoadingContainer = styled('section', {
  position: 'absolute',
  display: 'flex',
  opacity: 0,
  pointerEvents: 'none',

  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',

  transition: 'opacity 300ms ease',

  svg: {
    animation: ` ${loader} 2000ms linear infinite`,
  },
})

export const ButtonContainer = styled('button', {
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
    loading: {
      true: {
        [`& ${ButtonContent}`]: {
          opacity: 0,
          pointerEvents: 'none',
        },
        [`& ${LoadingContainer}`]: {
          opacity: 1,
          pointerEvents: 'all',
        },
      },
    },
    variant: {
      default: {
        color: '$grey6',
        background: '$grey3',

        '&:not(:disabled):hover': {
          background: '$grey4',
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

      danger: {
        color: '$white',
        background: '$red10',

        '&:not(:disabled):hover': {
          background: '$red11',
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
        height: '$8',

        [`& ${LoadingContainer} > svg`]: {
          width: '$4',
          height: '$4',
        },
      },

      md: {
        padding: '0 $4',
        height: '$10',

        [`& ${LoadingContainer} > svg`]: {
          width: '$5',
          height: '$5',
        },
      },

      lg: {
        padding: '0 $6',
        height: '$12',

        [`& ${LoadingContainer} > svg`]: {
          width: '$6',
          height: '$6',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})
