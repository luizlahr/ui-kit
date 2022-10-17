import { AvatarContainer, AvatarFallback, AvatarImage } from './Avatar.styles'
import { User } from 'phosphor-react'
import { AvatarProps } from './Avatar.types'

export const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
