import { styled } from '../../styles'

export const BreadcrumbContainer = styled('nav', {
  position: 'relative',
  display: 'flex',

  ol: {
    all: 'unset',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
})
