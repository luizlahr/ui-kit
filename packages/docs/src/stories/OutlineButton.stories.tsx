import type { Meta, StoryObj } from '@storybook/react'
import { OutlineButton, OutlineButtonProps } from '@luizlahr-ui/react'
import { Plus } from 'phosphor-react'

export default {
  title: 'Form/OutlineButton',
  component: OutlineButton,
  args: {
    children: 'This is a OutlineButton',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['default', 'primary', 'danger'],
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['sm', 'md', 'lg'],
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<OutlineButtonProps>

export const Default: StoryObj<OutlineButtonProps> = {
  args: {
    variant: 'default',
  },
}

export const Primary: StoryObj<OutlineButtonProps> = {
  args: {
    variant: 'primary',
  },
}

export const Danger: StoryObj<OutlineButtonProps> = {
  args: {
    variant: 'danger',
  },
}

export const Disabled: StoryObj<OutlineButtonProps> = {
  args: {
    disabled: true,
  },
}

export const Small: StoryObj<OutlineButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<OutlineButtonProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<OutlineButtonProps> = {
  args: {
    size: 'lg',
  },
}

export const WithIcon: StoryObj<OutlineButtonProps> = {
  args: {
    children: (
      <>
        <Plus />
        OutlineButton
      </>
    ),
  },
}

export const Loading: StoryObj<OutlineButtonProps> = {
  args: {
    loading: true,
  },
}
