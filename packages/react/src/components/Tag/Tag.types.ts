import { ComponentProps } from '../../types/ComponentProps'
import { TagContainer } from './Tag.styles'

export type TagVariant = 'default' | 'primary' | 'danger' | 'customColor'

export type TagProps = ComponentProps<typeof TagContainer> & {
  disabled?: boolean
  variants?: TagVariant
  deletable: boolean
  color?: string
  textColor?: string
  onDelete?: () => void
}
