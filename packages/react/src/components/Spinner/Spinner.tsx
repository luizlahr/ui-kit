import { keyframes, styled } from '../../styles'

export const Spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Spinner = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$4',
  height: '$4',

  backgroundColor: 'transparent',
  border: '2px solid $primary9',
  borderRightColor: '$primary12',
  borderRadius: '$round',

  animation: `${Spin} 800ms infinite linear`,

  variants: {
    size: {
      sm: {
        width: '$3',
        height: '$3',
      },
      md: {
        width: '$4',
        height: '$4',
      },
      lg: {
        width: '$5',
        height: '$5',
        borderWidth: '3px',
      },
      xl: {
        width: '$6',
        height: '$6',
        borderWidth: '4px',
      },
    },
  },
})
