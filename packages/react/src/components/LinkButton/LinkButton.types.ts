import { ComponentProps } from '../../types/ComponentProps'
import { LinkButtonContainer } from './LinkButton.styles'

export type LinkButtonProps = ComponentProps<typeof LinkButtonContainer> & {
  full?: boolean
  disabled?: boolean
}
