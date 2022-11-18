import { styled } from '../../styles'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

export const DialogContainer = styled(AlertDialog.Root, {})

export const DialogOverlay = styled(AlertDialog.Overlay, {
  position: 'fixed',
  inset: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: '$blackA10',
})

export const DialogContent = styled(AlertDialog.Content, {
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

export const DialogTitle = styled(AlertDialog.Title, {
  padding: '$4 $4 0 $4',
  margin: 0,
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$box-title-color',
  textRendering: 'optimizeLegibility',
})

export const DialogDescription = styled(AlertDialog.Description, {
  margin: 0,
  flex: '1',
  padding: '$4',
  color: '$box-text-color',
})

export const CancelContainer = styled(AlertDialog.Cancel, {})

export const ActionContainer = styled(AlertDialog.Action, {})

export const DialogFooter = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$1',

  padding: '0 $4 $4',
})
