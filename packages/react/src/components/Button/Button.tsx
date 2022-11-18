import { Spinner } from 'phosphor-react'
import { PropsWithChildren, ReactElement } from 'react'
import {
  ButtonContainer,
  ButtonContent,
  LoadingContainer,
} from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = ({
  loading,
  children,
  ...props
}: PropsWithChildren<ButtonProps>): ReactElement => {
  return (
    <ButtonContainer {...props} loading={loading}>
      <LoadingContainer>
        <Spinner weight="bold" />
      </LoadingContainer>
      <ButtonContent>{children}</ButtonContent>
    </ButtonContainer>
  )
}
Button.displayName = 'Button'
