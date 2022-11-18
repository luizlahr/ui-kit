import { ReactElement } from 'react'
import { Input, Prefix, NativeSelectContainer } from './NativeSelect.styles'
import { NativeSelectOption, NativeSelectProps } from './NativeSelect.types'

export const NativeSelect = ({
  prefix,
  isInvalid,
  options,
  placeholder,
  ...props
}: NativeSelectProps): ReactElement => {
  return (
    <NativeSelectContainer isInvalid={!!isInvalid}>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} aria-disabled={props?.disabled}>
        {!!placeholder && (
          <option disabled value="">
            <em>{placeholder}</em>
          </option>
        )}
        {options?.map(({ value, label }: NativeSelectOption) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Input>
    </NativeSelectContainer>
  )
}

NativeSelect.displayName = 'NativeSelect'
