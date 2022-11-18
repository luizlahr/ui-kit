import { ComponentProps } from '../../types/ComponentProps'
import { OutlineButtonContainer } from './OutlineButton.styles'

export type OutlineButtonProps = ComponentProps<
  typeof OutlineButtonContainer
> & {
  loading?: boolean
}
