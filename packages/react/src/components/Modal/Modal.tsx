import {
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
  useMemo,
  useState,
} from 'react'
import { Trigger, Portal } from '@radix-ui/react-dialog'
import {
  ModalContainer,
  ModalContent,
  ModalDescription,
  ModalOverlay,
  ModalTitle,
  ModalClose,
  ModalCloseWrapper,
} from './Modal.styles'
import { ModalProps } from './Modal.types'
import { X } from 'phosphor-react'

export const Modal = ({
  size = 'md',
  title,
  TriggerButton,
  children,
  open: defaultOpen = false,
  ...props
}: PropsWithChildren<ModalProps>): ReactElement => {
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

  return (
    <ModalContainer {...props} open={open}>
      <Trigger asChild onClick={handleOpen}>
        {TriggerButton}
      </Trigger>
      <Portal>
        <ModalOverlay className="LuiModal-overlay" />
        <ModalContent size={size}>
          <ModalClose asChild onClick={handleClose}>
            <ModalCloseWrapper role="button">
              <X weight="bold" />
            </ModalCloseWrapper>
          </ModalClose>
          {!!title && <ModalTitle>Title</ModalTitle>}
          <ModalDescription>{children}</ModalDescription>
        </ModalContent>
      </Portal>
    </ModalContainer>
  )
}

Modal.displayName = 'Modal'
