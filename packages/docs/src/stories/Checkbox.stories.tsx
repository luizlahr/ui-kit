import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@luizlahr-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
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
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {
  args: {
    placeholder: 'This is a Checkbox',
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
    placeholder: 'This is a Disabled Checkbox',
  },
}

export const WithPrefix: StoryObj<CheckboxProps> = {
  args: {
    prefix: 'luizlahr.com/',
    placeholder: 'This is a Checkbox with prefix',
  },
}
