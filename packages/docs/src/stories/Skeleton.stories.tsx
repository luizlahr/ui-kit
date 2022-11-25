import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, SkeletonProps } from '@luizlahr-ui/react'

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['text', 'circular', 'rectangular', 'rounded'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  },
} as Meta<SkeletonProps>

export const Default: StoryObj<SkeletonProps> = {
  args: {},
}

export const Circular: StoryObj<SkeletonProps> = {
  args: {
    variant: 'circular',
    width: '$10',
    height: '$10',
  },
}

export const Rectangular: StoryObj<SkeletonProps> = {
  args: {
    variant: 'rectangular',
  },
}

export const Rounded: StoryObj<SkeletonProps> = {
  args: {
    variant: 'rounded',
  },
}

export const CustomColor: StoryObj<SkeletonProps> = {
  args: {
    color: '$blue9',
  },
}
