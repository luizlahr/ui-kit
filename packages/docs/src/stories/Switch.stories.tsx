import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Switch, SwitchProps } from '@luizlahr-ui/react'

export default {
  title: 'Form/Switch',
  component: Switch,
  args: {
    disabled: false,
    checked: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    checked: {
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
} as Meta<SwitchProps>

export const Default: StoryObj<SwitchProps> = {
  args: {},
}

export const Checked: StoryObj<SwitchProps> = {
  args: {
    checked: true,
  },
}

export const Disabled: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
  },
}
