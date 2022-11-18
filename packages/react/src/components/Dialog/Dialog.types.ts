import { ReactNode } from 'react'
import { ComponentProps } from '../../types/ComponentProps'
import { DialogContainer } from './Dialog.styles'

export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'full'

export type DialogProps = ComponentProps<typeof DialogContainer> & {
  size?: DialogSize
  title?: string
  action: () => Promise<void> | void
  ActionButton?: ReactNode
  CancelButton?: ReactNode
  TriggerButton: ReactNode
}
