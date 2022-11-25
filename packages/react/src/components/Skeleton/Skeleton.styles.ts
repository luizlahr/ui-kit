import { Skeleton as MuiSkeleton } from '@mui/material'
import { styled } from '../../styles'

export const SkeletonContainer = styled(MuiSkeleton, {
  '&.MuiSkeleton-root': {
    backgroundColor: 'var(--skeleton-bg-color)',
  },
})
