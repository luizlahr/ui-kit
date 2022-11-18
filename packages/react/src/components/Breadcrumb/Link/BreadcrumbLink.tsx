import { PropsWithChildren, ReactElement } from 'react'
import {
  CurrentPageItemContainer,
  LinkContainer,
} from './BreadcrumbLink.styles'
import { BreadcrumbLinkProps } from './BreadcrumbLink.types'

export const BreadcrumbLink = ({
  children,
  currentPage,
  to,
}: PropsWithChildren<BreadcrumbLinkProps>): ReactElement => {
  return currentPage ? (
    <CurrentPageItemContainer>{children}</CurrentPageItemContainer>
  ) : (
    <LinkContainer href={to}>{children}</LinkContainer>
  )
}
