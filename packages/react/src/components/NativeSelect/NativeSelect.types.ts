import { BasicInputProps } from '../../types/BasicInputProps'
import { ComponentProps } from '../../types/ComponentProps'
import { Input } from './NativeSelect.styles'

export type NativeSelectOption = {
  value: string | number
  label: string
}

export type NativeSelectProps = BasicInputProps &
  ComponentProps<typeof Input> & {
    prefix?: string
    options: NativeSelectOption[]
  }
