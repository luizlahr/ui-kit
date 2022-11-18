import { ReactElement } from 'react'
import { DropdownIcon } from './DropdownIcon/DropdownIcon'
import {
  Option,
  PopoverStyles,
  SelectInputContainer,
} from './SelectInput.styles'
import { SelectInputProps } from './SelectInput.types'

export const SelectInput = ({
  options,
  placeholder,
  ...props
}: SelectInputProps): ReactElement => {
  PopoverStyles()

  return (
    <SelectInputContainer
      IconComponent={DropdownIcon}
      displayEmpty
      // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
      renderValue={(selected) => {
        if (!selected) {
          return <em>{placeholder}</em>
        }
        return <>{options.find((item) => selected === item.value)?.label}</>
      }}
      {...props}
    >
      {!!placeholder && (
        <Option disabled value="">
          <em>{placeholder}</em>
        </Option>
      )}
      {options?.map((option) => {
        return (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        )
      })}
    </SelectInputContainer>
  )
}
