import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@luizlahr-ui/react'
import { Plus } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'This is a Button',
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
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    variant: 'default',
  },
}

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Plus />
        Button
      </>
    ),
  },
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    loading: true,
  },
}
