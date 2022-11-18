import { PropsWithChildren, ReactElement } from 'react'
import { LinkButtonContainer } from './LinkButton.styles'
import { LinkButtonProps } from './LinkButton.types'

export const LinkButton = ({
  children,
  ...props
}: PropsWithChildren<LinkButtonProps>): ReactElement => {
  return (
    <LinkButtonContainer role="button" {...props}>
      {children}
    </LinkButtonContainer>
  )
}
