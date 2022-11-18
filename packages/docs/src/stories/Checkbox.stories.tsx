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
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm" css={{ color: '$box-text-color' }}>
            Input Label
          </Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {
  args: {},
}

export const Checked: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}

export const CheckedAndDisabled: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
    disabled: true,
  },
}
