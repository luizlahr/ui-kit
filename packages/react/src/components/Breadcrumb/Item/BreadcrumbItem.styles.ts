import { styled } from '../../../styles'

export const BreadcrumbItemContainer = styled('li', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  fontFamily: '$default',
  fontWeight: '$regular',
  color: '$grey4',

  span: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 $1',

    svg: {
      width: '$3',
      height: '$3',
    },
  },

  variants: {
    currentPage: {
      true: {
        color: '$white',
      },
    },
  },
})
