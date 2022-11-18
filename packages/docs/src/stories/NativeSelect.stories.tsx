import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, NativeSelect, NativeSelectProps } from '@luizlahr-ui/react'

export default {
  title: 'Form/NativeSelect',
  component: NativeSelect,
  args: {
    isInvalid: false,
    value: '',
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
} as Meta<NativeSelectProps>

export const Default: StoryObj<NativeSelectProps> = {
  args: {
    placeholder: 'This is a NativeSelect',
  },
}

export const Disabled: StoryObj<NativeSelectProps> = {
  args: {
    disabled: true,
    placeholder: 'This is a Disabled NativeSelect',
  },
}

export const WithPrefix: StoryObj<NativeSelectProps> = {
  args: {
    prefix: 'luizlahr.com/',
    placeholder: 'This is a NativeSelect with prefix',
  },
}

export const WithError: StoryObj<NativeSelectProps> = {
  args: {
    isInvalid: true,
    placeholder: 'This is a NativeSelect with prefix',
  },
}
