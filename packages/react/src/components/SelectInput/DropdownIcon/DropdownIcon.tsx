import { ReactElement } from 'react'
import { Icon } from './DropdownIcon.styles'

export const DropdownIcon = ({ ...props }): ReactElement => {
  return <Icon size="16px" weight="bold" {...props} />
}
