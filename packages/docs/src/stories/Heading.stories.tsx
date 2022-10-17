import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@luizlahr-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'This is a Heading',
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    size: 'xl',
    children: 'This is a Heading with a <h1> tag',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default a Heading is always an `h2` since there should only be 1 `h1` on a page. Although it is possible to change it using the property `as`',
      },
    },
  },
}
