import { ReactNode } from 'react'
import { ComponentProps } from '../../types/ComponentProps'
import { ModalContainer } from './Modal.styles'

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'full'

export type ModalProps = ComponentProps<typeof ModalContainer> & {
  size?: ModalSize
  title?: string
  TriggerButton: ReactNode
}
