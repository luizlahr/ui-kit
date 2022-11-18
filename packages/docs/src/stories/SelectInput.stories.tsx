import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, SelectInput, SelectInputProps } from '@luizlahr-ui/react'

export default {
  title: 'Form/SelectInput',
  component: SelectInput,
  args: {
    isInvalid: false,
    placeholder: 'Select an option...',
    options: [
      { value: 1, label: 'Label 01' },
      { value: '2', label: 'Label 02' },
    ],
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
} as Meta<SelectInputProps>

export const Default: StoryObj<SelectInputProps> = {
  args: {},
}

export const Disabled: StoryObj<SelectInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithError: StoryObj<SelectInputProps> = {
  args: {
    isInvalid: true,
  },
}
