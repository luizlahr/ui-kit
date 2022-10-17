import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@luizlahr-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 1,
    size: 4,
  },
}

export const Complete: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
    size: 4,
  },
}
