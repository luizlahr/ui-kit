import { PropsWithChildren, ReactElement } from 'react'
import { getColorString } from '../../utils/colors'
import { getSizeString } from '../../utils/sizes'
import { SkeletonContainer } from './Skeleton.styles'
import { SkeletonProps } from './Skeleton.types'

export const Skeleton = ({
  variant,
  height,
  width,
  children,
  classes,
  color = '$grey6',
}: PropsWithChildren<SkeletonProps>): ReactElement => {
  return (
    <SkeletonContainer
      variant={variant}
      width={getSizeString(width)}
      height={getSizeString(height)}
      animation="pulse"
      classes={classes}
      css={{ '--skeleton-bg-color': getColorString(color) }}
    >
      {children}
    </SkeletonContainer>
  )
}

Skeleton.displayName = 'Skeleton'
