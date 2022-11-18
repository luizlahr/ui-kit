import { Spinner } from 'phosphor-react'
import { PropsWithChildren, ReactElement } from 'react'
import {
  OutlineButtonContainer,
  OutlineButtonContent,
  LoadingContainer,
} from './OutlineButton.styles'
import { OutlineButtonProps } from './OutlineButton.types'

export const OutlineButton = ({
  loading,
  children,
  ...props
}: PropsWithChildren<OutlineButtonProps>): ReactElement => {
  return (
    <OutlineButtonContainer {...props} loading={loading}>
      <LoadingContainer>
        <Spinner weight="bold" />
      </LoadingContainer>
      <OutlineButtonContent>{children}</OutlineButtonContent>
    </OutlineButtonContainer>
  )
}
OutlineButton.displayName = 'OutlineButton'
