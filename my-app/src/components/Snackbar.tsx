import React from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function SnackbarMessage({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  return (
    <Snackbar
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        textAnchor: "middle",
        color: "primary",
      }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      message={message}
      open={Boolean(message.length)}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
      autoHideDuration={3000}
      onClose={onClose}
    ></Snackbar>
  );
}
