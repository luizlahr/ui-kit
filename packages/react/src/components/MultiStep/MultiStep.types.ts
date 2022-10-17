import { ComponentProps } from '../../types/ComponentProps'
import { MultiStepContainer } from './MultiStep.styles'

export type MultiStepProps = ComponentProps<typeof MultiStepContainer> & {
  size: number
  currentStep?: number
}
