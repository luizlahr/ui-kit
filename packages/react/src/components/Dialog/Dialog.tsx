import {
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
  useMemo,
  useState,
} from 'react'
import { Trigger, Portal } from '@radix-ui/react-alert-dialog'
import {
  ActionContainer,
  CancelContainer,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
  DialogTitle,
} from './Dialog.styles'
import { Button, OutlineButton } from '../../'
import { DialogProps } from './Dialog.types'

export const Dialog = ({
  size = 'md',
  ActionButton,
  CancelButton,
  TriggerButton,
  action,
  children,
  title,
  open: defaultOpen = false,
  ...props
}: PropsWithChildren<DialogProps>): ReactElement => {
  const [open, setOpen] = useState(defaultOpen)

  const handleOpen = useMemo((): MouseEventHandler<HTMLButtonElement> => {
    return () => {
      setOpen(true)
    }
  }, [])

  const handleClose = useMemo((): MouseEventHandler<HTMLButtonElement> => {
    return () => {
      setOpen(false)
    }
  }, [])

  const handleAction = useMemo((): MouseEventHandler<HTMLButtonElement> => {
    return async (): Promise<void> => {
      await action()
      setOpen(false)
    }
  }, [action])

  return (
    <DialogContainer {...props} open={open}>
      <Trigger asChild onClick={handleOpen}>
        {TriggerButton}
      </Trigger>
      <Portal>
        <DialogOverlay className="LuiDialog-overlay" />
        <DialogContent size={size}>
          {!!title && <DialogTitle>{title}</DialogTitle>}
          <DialogDescription>{children}</DialogDescription>
          <DialogFooter>
            <CancelContainer onClick={handleClose} asChild>
              {CancelButton || <OutlineButton>Cancel</OutlineButton>}
            </CancelContainer>
            <ActionContainer onClick={handleAction} asChild>
              {ActionButton || <Button variant="primary">Ok</Button>}
            </ActionContainer>
          </DialogFooter>
        </DialogContent>
      </Portal>
    </DialogContainer>
  )
}

Dialog.displayName = 'Dialog'
