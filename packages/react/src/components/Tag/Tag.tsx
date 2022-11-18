import { X } from 'phosphor-react'
import { PropsWithChildren, ReactElement } from 'react'
import { getColorString } from '../../utils/colors'
import { TagContainer, XContainer } from './Tag.styles'
import { TagProps } from './Tag.types'

export const Tag = ({
  children,
  variant = 'default',
  onDelete,
  color,
  textColor,
  deletable,
  ...props
}: PropsWithChildren<TagProps>): ReactElement => {
  const cssVars: Record<string, string> =
    !!color && !!textColor
      ? {
          $$customBgColor: color ? getColorString(color) : '',
          $$customTextColor: textColor ? getColorString(textColor) : '',
          $$customXBgColor: textColor ? getColorString(textColor) : '',
          $$customXTextColor: color ? getColorString(color) : '',
        }
      : {}

  return (
    <TagContainer
      variant={!!color && !!textColor ? 'customColor' : variant}
      customColor={!!color}
      {...props}
      css={{ ...cssVars }}
    >
      {children}
      {deletable && (
        <XContainer role="button" onClick={onDelete} title="delete">
          <X weight="bold" />
        </XContainer>
      )}
    </TagContainer>
  )
}

Tag.displayName = 'Tag'
