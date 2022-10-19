import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  FormControl,
  FormControlProps,
  TextInput,
} from '@luizlahr-ui/react'

export default {
  title: 'Form/FormControl',
  component: FormControl,
  args: {
    children: <TextInput />,
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column' }}>{Story()}</Box>
      )
    },
  ],
} as Meta<FormControlProps>

export const Default: StoryObj<FormControlProps> = {
  args: {
    label: 'This is a Form Control Label',
    errorMessage: 'This is a Form Control Error Message',
  },
}
