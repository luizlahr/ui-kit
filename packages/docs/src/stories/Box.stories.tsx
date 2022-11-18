import type { Meta } from '@storybook/react'
import { Box as BoxComponent, BoxProps } from '@luizlahr-ui/react'

export default {
  title: 'Layout/Box',
  component: BoxComponent,
  parameters: {
    backgrounds: {
      values: [],
    },
  },
} as Meta<BoxProps>

export const Box = (args: BoxProps) => (
  <BoxComponent {...args}>
    <span style={{ color: 'white' }}>This is a Box</span>
  </BoxComponent>
)
