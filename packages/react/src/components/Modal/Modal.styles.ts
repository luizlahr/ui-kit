import { styled } from '../../styles'
import * as Modal from '@radix-ui/react-dialog'

export const ModalContainer = styled(Modal.Root, {})

export const ModalOverlay = styled(Modal.Overlay, {
  position: 'fixed',
  inset: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: '$overlay-background-color',
})

export const ModalContent = styled(Modal.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  fontFamily: '$default',

  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$box-background-color',
  borderRadius: '$lg',

  variants: {
    size: {
      xs: {
        width: '30vw',
      },
      sm: {
        width: '50vw',
      },
      md: {
        width: '70vw',
      },
      lg: {
        width: '90vw',
      },
      full: {
        width: '100vw',
        height: '100vh',
        borderRadius: '$xs',
      },
    },
  },
})

export const ModalTitle = styled(Modal.Title, {
  padding: '$4 $4 0 $4',
  margin: 0,
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$box-title-color',
})

export const ModalClose = styled(Modal.Close, {})

export const ModalCloseWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  color: '$grey4',

  lineHeight: '0',

  width: '16px',
  height: '16px',
  padding: '$1',
  top: '$2',
  right: '$2',
  borderRadius: '$round',
  transition: 'all 200ms ease-in-out',

  cursor: 'pointer',

  '&:hover': {
    color: '$red10',
    transform: 'scale(1.2)',
  },
})

export const ModalDescription = styled(Modal.Description, {
  margin: 0,
  flex: '1',
  padding: '$4',
  color: '$grey6',
})
