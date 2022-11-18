import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@luizlahr-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Input Label</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'This is a TextArea',
  },
}

export const WithError: StoryObj<TextAreaProps> = {
  args: {
    isInvalid: true,
    placeholder: 'This is a Disabled TextArea',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: 'This is a Disabled TextArea',
  },
}
