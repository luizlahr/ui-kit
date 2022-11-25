import { Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip'
import { PropsWithChildren, ReactElement } from 'react'
import { TooltipArrow, TooltipContent } from './Tooltip.styles'
import { TooltipProps } from './Tooltip.types'

export const Tooltip = ({
  children,
  content,
}: PropsWithChildren<TooltipProps>): ReactElement => {
  return (
    <Provider>
      <Root delayDuration={400}>
        <Trigger asChild>
          <div>{children}</div>
        </Trigger>
        <Portal>
          <TooltipContent sideOffset={5}>
            {content}
            <TooltipArrow className="TooltipArrow" />
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  )
}
