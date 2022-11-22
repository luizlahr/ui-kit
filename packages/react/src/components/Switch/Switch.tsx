import { ReactElement } from 'react'
import { SwitchContainer, SwitchThumb } from './Switch.styles'
import { SwitchProps } from './Switch.types'

export const Switch = ({ ...props }: SwitchProps): ReactElement => {
  return (
    <SwitchContainer {...props}>
      <SwitchThumb />
    </SwitchContainer>
  )
}

Switch.displayName = 'Switch'
