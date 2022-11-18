import type { Meta, StoryObj } from '@storybook/react'
import { LinkButton, LinkButtonProps } from '@luizlahr-ui/react'
import { Plus } from 'phosphor-react'

export default {
  title: 'Form/LinkButton',
  component: LinkButton,
  args: {
    children: 'This is a LinkButton',
    disabled: false,
    full: false,
    variant: 'default',
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
    full: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['default', 'primary', 'danger'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<LinkButtonProps>

export const Default: StoryObj<LinkButtonProps> = {
  args: {},
}

export const Primary: StoryObj<LinkButtonProps> = {
  args: {
    variant: 'primary',
  },
}

export const Danger: StoryObj<LinkButtonProps> = {
  args: {
    variant: 'danger',
  },
}

export const WithIcon: StoryObj<LinkButtonProps> = {
  args: {
    children: (
      <>
        <Plus />
        LinkButton
      </>
    ),
  },
}
