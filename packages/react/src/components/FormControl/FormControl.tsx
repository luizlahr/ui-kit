import { cloneElement, PropsWithChildren, ReactElement } from 'react'
import { ErrorMessage, FormControlContainer, Label } from './FormControl.styles'
import { FormControlProps } from './FormControl.types'

export const FormControl = ({
  children,
  label,
  errorMessage,
  ...props
}: PropsWithChildren<FormControlProps>): ReactElement => {
  return (
    <FormControlContainer {...props}>
      {!!label && <Label>{label}</Label>}
      {cloneElement(children as ReactElement, {
        isInvalid: !!errorMessage,
      })}
      {!!errorMessage && <ErrorMessage size="xs">{errorMessage}</ErrorMessage>}
    </FormControlContainer>
  )
}
