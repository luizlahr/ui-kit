import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@luizlahr-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>This is a Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
