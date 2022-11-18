import type { Meta, StoryObj } from '@storybook/react'
import { Tag as TagComponent, TagProps } from '@luizlahr-ui/react'

export default {
  title: 'Data Display/Tag',
  component: TagComponent,
  parameters: {
    backgrounds: {
      values: [],
    },
  },
  argTypes: {
    onDelete: {
      action: 'click on Delete',
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['default', 'primary', 'danger'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    children: 'This is a tag',
    variant: 'default',
    disabled: false,
  },
} as Meta<TagProps>

export const Default: StoryObj<TagProps> = {
  args: {},
}

export const Primary: StoryObj<TagProps> = {
  args: {
    variant: 'primary',
  },
}

export const Danger: StoryObj<TagProps> = {
  args: {
    variant: 'danger',
  },
}

export const Info: StoryObj<TagProps> = {
  args: {
    variant: 'info',
  },
}

export const Warning: StoryObj<TagProps> = {
  args: {
    variant: 'warning',
  },
}

export const CustomColor: StoryObj<TagProps> = {
  args: {
    color: '$green10',
    textColor: '#ffffff',
    deletable: true,
  },
}

export const Disabled: StoryObj<TagProps> = {
  args: {
    disabled: true,
  },
}

export const Deletable: StoryObj<TagProps> = {
  args: {
    deletable: true,
  },
}
