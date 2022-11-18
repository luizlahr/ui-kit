import type { Meta, StoryObj } from '@storybook/react'
import {
  Button,
  FormControl,
  Grid,
  Modal as ModalComponent,
  ModalProps,
  TextInput,
} from '@luizlahr-ui/react'

export default {
  title: 'Feedback/Modal',
  component: ModalComponent,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['xs', 'sm', 'md', 'lg', 'full'],
    },
  },
  args: {
    title: 'Modal Title',
    size: 'md',
    children: (
      <Grid container>
        <Grid xs={12}>
          <FormControl label="Name">
            <TextInput name="name" />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl label="Email">
            <TextInput name="email" type="email" />
          </FormControl>
        </Grid>
      </Grid>
    ),
  },
} as Meta<ModalProps>

export const Default: StoryObj<ModalProps> = {
  args: {
    open: false,
    TriggerButton: <Button>Trigger</Button>,
  },
}

export const WithoutTitle: StoryObj<ModalProps> = {
  args: {
    open: false,
    title: undefined,
    TriggerButton: <Button>Trigger</Button>,
  },
}

export const XSmall: StoryObj<ModalProps> = {
  args: {
    open: true,
    size: 'xs',
    TriggerButton: <Button>X-Small</Button>,
  },
}

export const Small: StoryObj<ModalProps> = {
  args: {
    open: true,
    size: 'sm',
    TriggerButton: <Button>Small</Button>,
  },
}

export const Medium: StoryObj<ModalProps> = {
  args: {
    open: true,
    size: 'md',
    TriggerButton: <Button>Medium</Button>,
  },
}

export const Large: StoryObj<ModalProps> = {
  args: {
    open: true,
    size: 'lg',
    TriggerButton: <Button>Large</Button>,
  },
}

export const Full: StoryObj<ModalProps> = {
  args: {
    open: true,
    size: 'full',
    TriggerButton: <Button>Full</Button>,
  },
}
