import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { memo } from 'react'
import { colorConfigs } from 'src/config/color'

export interface SimpleDialogProps {
  open: boolean
  selectedValue: string
  onClose: (value: string) => void
}

export const SimpleDialog = memo((props: SimpleDialogProps) => {
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle textAlign='center'>{selectedValue}とは？</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description' color={colorConfigs.text.primary}>
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
})
