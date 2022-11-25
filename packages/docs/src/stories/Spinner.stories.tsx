import type { Meta, StoryObj } from '@storybook/react'
import { Box, Spinner, SpinnerProps } from '@luizlahr-ui/react'

export default {
  title: 'Feedback/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [],
    },
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            width: '80vw',
            height: '50vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<SpinnerProps>

export const Default: StoryObj<SpinnerProps> = {
  args: {},
}

export const Small: StoryObj<SpinnerProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<SpinnerProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<SpinnerProps> = {
  args: {
    size: 'lg',
  },
}

export const XLarge: StoryObj<SpinnerProps> = {
  args: {
    size: 'xl',
  },
}
