import { keyframes, styled } from '../../styles'
import { transparentize } from 'polished'
import { colors } from '@luizlahr-ui/tokens'

export const OutlineButtonContent = styled('section', {
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

export const OutlineButtonContainer = styled('button', {
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

  backgroundColor: 'transparent',
  border: '2px solid $grey5',

  cursor: 'pointer',

  transition: 'all 300ms ease-out',

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    loading: {
      true: {
        [`& ${OutlineButtonContent}`]: {
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
        color: '$grey4',
        borderColor: '$grey4',

        '&:not(:disabled):hover': {
          backgroundColor: transparentize(0.8, colors.grey4),
        },

        '&:disabled': {
          opacity: '0.5',
          cursor: 'not-allowed',
        },
      },

      primary: {
        color: '$primary10',
        borderColor: '$primary10',

        '&:not(:disabled):hover': {
          backgroundColor: transparentize(0.8, colors.primary10),
        },

        '&:disabled': {
          opacity: '0.5',
          cursor: 'not-allowed',
        },
      },

      danger: {
        color: '$red10',
        borderColor: '$red10',

        '&:not(:disabled):hover': {
          backgroundColor: transparentize(0.8, colors.red10),
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
