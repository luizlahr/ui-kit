import { CaretRight } from 'phosphor-react'
import { cloneElement, PropsWithChildren, ReactElement } from 'react'
import { BreadcrumbItemContainer } from './BreadcrumbItem.styles'
import { BreadcrumbItemProps } from './BreadcrumbItem.types'

export const BreadcrumbItem = ({
  children,
  currentPage,
}: PropsWithChildren<BreadcrumbItemProps>): ReactElement => {
  return (
    <BreadcrumbItemContainer currentPage={currentPage}>
      {cloneElement(children as ReactElement, {
        currentPage,
      })}
      {!currentPage && (
        <span aria-hidden="true">
          <CaretRight />
        </span>
      )}
    </BreadcrumbItemContainer>
  )
}
