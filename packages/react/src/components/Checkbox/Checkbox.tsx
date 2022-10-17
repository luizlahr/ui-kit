import { Check } from 'phosphor-react'
import { ReactElement } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './Checkbox.styles'
import { CheckboxProps } from './Checkbox.types'

export const Checkbox = (props: CheckboxProps): ReactElement => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
