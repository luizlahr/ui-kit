import { BasicInputProps } from '../../types/BasicInputProps'

export type SelectOption = {
  value: string | number
  label: string
}

export type SelectInputProps = BasicInputProps & {
  options: SelectOption[]
}
