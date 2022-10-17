import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@luizlahr-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/luizlahr.png',
    alt: 'Luiz Lahr',
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'If no `src` is provided a fallback image will be displayed',
      },
    },
  },
}
