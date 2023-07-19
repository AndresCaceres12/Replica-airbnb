import React from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";

const UserOptionsModal = ({ open, onClose, onLogin, onRegister }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Opciones de Usuario</DialogTitle>
      <DialogContent>
        <Button variant="contained" color="primary" onClick={onLogin}>
          Iniciar sesión
        </Button>
        <Button variant="outlined" color="primary" onClick={onRegister}>
          Registrarse
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UserOptionsModal;
