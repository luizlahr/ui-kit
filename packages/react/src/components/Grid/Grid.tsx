import { PropsWithChildren, ReactElement } from 'react'
import { GridContainer } from './Grid.styles'
import { GridProps } from './Grid.types'

export const Grid = ({
  children,
  spacing = 2,
  ...props
}: PropsWithChildren<GridProps>): ReactElement => {
  return (
    <GridContainer spacing={spacing} {...props}>
      {children}
    </GridContainer>
  )
}

Grid.displayName = 'Grid'
