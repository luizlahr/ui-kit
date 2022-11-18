import type { Meta } from '@storybook/react'
import {
  Breadcrumb as BC,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
} from '@luizlahr-ui/react'

export default {
  component: BC,
  parameters: {
    layout: 'centered',
    docs: {
      docsPage: {
        controls: {
          disabled: true,
        },
      },
    },
  },
  title: 'Navigation/Breadcrumb',
} as Meta<{}>

export const Breadcrumb = (args: BreadcrumbProps) => (
  <BC {...args}>
    <BreadcrumbItem>
      <BreadcrumbLink to="#">Label 01</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink to="#">Label 02</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem currentPage>
      <BreadcrumbLink to="#">Label 03</BreadcrumbLink>
    </BreadcrumbItem>
  </BC>
)
