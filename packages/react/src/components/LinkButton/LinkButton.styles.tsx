import { styled } from '../../styles'

export const LinkButtonContainer = styled('a', {
  position: 'relative',
  display: 'flex',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$regular',

  width: 'max-content',

  cursor: 'pointer',

  justifyContent: 'center',
  alignItems: 'center',
  gap: '$1',
  overflow: 'hidden',
  paddingBottom: '2px',

  textDecoration: 'none',

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    overflow: 'hidden',
    transition: 'opacity 300ms, transform 300ms',

    opacity: 1,
    transform: 'translateX(-101%)',
  },

  '&:hover::after, &:focus::after': {
    transform: 'translateX(0)',
  },

  variants: {
    full: {
      true: {
        width: '100%',
      },
    },
    variant: {
      default: {
        color: '$grey4',
        '&::after': {
          backgroundColor: '$grey4',
        },
      },
      primary: {
        color: '$primary8',
        '&::after': {
          backgroundColor: '$primary8',
        },
      },
      danger: {
        color: '$red8',
        '&::after': {
          backgroundColor: '$red8',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
