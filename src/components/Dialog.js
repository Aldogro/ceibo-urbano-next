import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({ isOpen, handleConfirm, handleClose, question }) {
  const [open, setOpen] = React.useState(isOpen);

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{question}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Borrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}