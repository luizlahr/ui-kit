import { BasicInputProps } from '../../types/BasicInputProps'
import { ComponentProps } from '../../types/ComponentProps'
import { Input } from './TextInput.styles'

export type TextInputProps = BasicInputProps &
  ComponentProps<typeof Input> & {
    prefix?: string
  }
