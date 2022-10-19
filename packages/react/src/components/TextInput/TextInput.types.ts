import { ComponentProps } from '../../types/ComponentProps'
import { Input } from './TextInput.styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
  isInvalid?: boolean
}
