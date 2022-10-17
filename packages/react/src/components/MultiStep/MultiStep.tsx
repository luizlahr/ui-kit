import { ReactElement } from 'react'
import { Label, MultiStepContainer, Step, Steps } from './MultiStep.styles'
import { MultiStepProps } from './MultiStep.types'

export const MultiStep = ({
  size,
  currentStep = 1,
}: MultiStepProps): ReactElement => {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--step-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
