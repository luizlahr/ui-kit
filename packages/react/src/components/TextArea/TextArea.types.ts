import { BasicInputProps } from '../../types/BasicInputProps'
import { ComponentProps } from '../../types/ComponentProps'
import { TextArea } from './TextArea'

export type TextAreaProps = BasicInputProps & ComponentProps<typeof TextArea>
