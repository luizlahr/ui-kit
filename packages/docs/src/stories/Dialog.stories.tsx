import type { Meta, StoryObj } from '@storybook/react'
import {
  Button,
  Dialog as DialogComponent,
  DialogProps,
} from '@luizlahr-ui/react'

export default {
  title: 'Feedback/Dialog',
  component: DialogComponent,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['xs', 'sm', 'md', 'lg', 'full'],
    },
  },
  args: {
    title: 'Dialog Title',
    size: 'md',
    children: <>Dialog content</>,
  },
} as Meta<DialogProps>

export const Default: StoryObj<DialogProps> = {
  args: {
    open: false,
    TriggerButton: <Button>Trigger</Button>,
    action: () => {
      alert('Clicou')
    },
  },
}

export const WithoutTitle: StoryObj<DialogProps> = {
  args: {
    title: undefined,
    open: false,
    TriggerButton: <Button>Trigger</Button>,
    action: () => {
      alert('Clicou')
    },
  },
}

export const WithCustomAction: StoryObj<DialogProps> = {
  args: {
    open: false,
    TriggerButton: <Button>Trigger</Button>,
    ActionButton: <Button variant="danger">Action</Button>,
    action: () => {
      alert('Clicou')
    },
  },
}

export const WithCustomCancel: StoryObj<DialogProps> = {
  args: {
    open: false,
    TriggerButton: <Button>Trigger</Button>,
    CancelButton: <Button variant="link">Cancel</Button>,
    action: () => {
      alert('Clicou')
    },
  },
}

export const XSmall: StoryObj<DialogProps> = {
  args: {
    open: true,
    size: 'xs',
    TriggerButton: <Button>X-Small</Button>,
    action: () => {},
  },
}

export const Small: StoryObj<DialogProps> = {
  args: {
    open: true,
    size: 'sm',
    TriggerButton: <Button>Small</Button>,
    action: () => {},
  },
}

export const Medium: StoryObj<DialogProps> = {
  args: {
    open: true,
    size: 'md',
    TriggerButton: <Button>Medium</Button>,
    action: () => {},
  },
}

export const Large: StoryObj<DialogProps> = {
  args: {
    open: true,
    size: 'lg',
    TriggerButton: <Button>Large</Button>,
    action: () => {},
  },
}

export const Full: StoryObj<DialogProps> = {
  args: {
    open: true,
    size: 'full',
    TriggerButton: <Button>Full</Button>,
    action: () => {},
  },
}
