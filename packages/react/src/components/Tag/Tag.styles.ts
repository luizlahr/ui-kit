import { styled } from '../../styles'

export const XContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '2px',
  borderRadius: '$round',
  cursor: 'pointer',

  transition: 'all 300ms ease',

  '&:hover': {
    transform: 'scale(1.2)',
  },

  svg: {
    width: '8px',
    height: '8px',
  },
})

export const TagContainer = styled('span', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  padding: '$1 $2',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  letterSpacing: 0.8,

  borderRadius: '$pill',

  maxWidth: 'max-content',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        [`& ${XContainer}`]: {
          pointerEvents: 'none',
        },
      },
    },
    variant: {
      default: {
        backgroundColor: '$grey3',
        color: '$grey8',
        [`& ${XContainer}`]: {
          color: '$grey4',
          backgroundColor: '$grey8',
        },
      },
      primary: {
        backgroundColor: '$primary10',
        color: '$primary12',
        [`& ${XContainer}`]: {
          backgroundColor: '$primary12',
          color: '$primary10',
        },
      },
      danger: {
        backgroundColor: '$red10',
        color: '$red12',
        [`& ${XContainer}`]: {
          color: '$red10',
          backgroundColor: '$red12',
        },
      },
      info: {
        backgroundColor: '$blue10',
        color: '$blue12',
        [`& ${XContainer}`]: {
          color: '$blue10',
          backgroundColor: '$blue12',
        },
      },
      warning: {
        backgroundColor: '$yellow10',
        color: '$yellow12',
        [`& ${XContainer}`]: {
          color: '$yellow10',
          backgroundColor: '$yellow12',
        },
      },
      customColor: {
        backgroundColor: '$$customBgColor',
        color: '$$customTextColor',

        [`& ${XContainer}`]: {
          color: '$$customXTextColor',
          backgroundColor: '$$customXBgColor',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
