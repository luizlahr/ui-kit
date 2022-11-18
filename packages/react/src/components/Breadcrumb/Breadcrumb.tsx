import { ReactElement } from 'react'
import { BreadcrumbContainer } from './Breadcrumb.styles'
import { BreadcrumbProps } from './Breadcrumb.types'

export const Breadcrumb = ({ children }: BreadcrumbProps): ReactElement => {
  return (
    <BreadcrumbContainer>
      <ol>
        <>{children}</>
      </ol>
    </BreadcrumbContainer>
  )
}
