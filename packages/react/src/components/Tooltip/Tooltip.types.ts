import { Root } from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { ComponentProps } from '../../types/ComponentProps'

export type TooltipSize = 'sm' | 'md' | 'lg' | 'xl'

export type TooltipProps = ComponentProps<typeof Root> & {
  content?: ReactNode | string
}
