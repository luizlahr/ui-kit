import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@luizlahr-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'This is a Text',
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'This is a Text with a <strong> tag',
  },
}
