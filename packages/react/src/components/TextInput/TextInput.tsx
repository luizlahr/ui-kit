import { ReactElement } from 'react'
import { Input, Prefix, TextInputContainer } from './TextInput.styles'
import { TextInputProps } from './TextInput.types'

export const TextInput = ({
  prefix,
  isInvalid,
  ...props
}: TextInputProps): ReactElement => {
  return (
    <TextInputContainer isInvalid={!!isInvalid}>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
