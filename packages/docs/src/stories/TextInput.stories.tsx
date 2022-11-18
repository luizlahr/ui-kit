import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@luizlahr-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    isInvalid: false,
  },
  argTypes: {
    isInvalid: {
      control: {
        type: 'boolean',
      },
    },
  },
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
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'This is a TextInput',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'This is a Disabled TextInput',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'luizlahr.com/',
    placeholder: 'This is a TextInput with prefix',
  },
}

export const WithError: StoryObj<TextInputProps> = {
  args: {
    isInvalid: true,
    placeholder: 'This is a TextInput with prefix',
  },
}
