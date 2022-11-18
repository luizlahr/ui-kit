import { ComponentProps } from '../../types/ComponentProps'
import { ButtonContainer } from './Button.styles'

export type ButtonProps = ComponentProps<typeof ButtonContainer> & {
  loading?: boolean
}
