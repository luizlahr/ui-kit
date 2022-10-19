import { ComponentProps } from '../../types/ComponentProps'
import { FormControlContainer } from './FormControl.styles'

export type FormControlProps = ComponentProps<typeof FormControlContainer> & {
  label?: string
  errorMessage?: string
}
