import React, { ReactNode } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import useFullScreenStyle from "../assets/styles/components/fullScreenStyle";

const TransitionComponent = React.forwardRef(
  (
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="down" ref={ref} {...props} />;
  }
);

export default function FullScreenView({
  children,
  isOpen,
  setIsOpen,
}: {
  children: ReactNode | ReactNode[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const classes = useFullScreenStyle();
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      TransitionComponent={TransitionComponent}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              setIsOpen(false);
            }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  );
}
