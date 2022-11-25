import { ComponentProps } from '../../types/ComponentProps'
import { Spinner } from './Spinner'

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl'

export type SpinnerProps = ComponentProps<typeof Spinner> & {
  size?: SpinnerSize
}
