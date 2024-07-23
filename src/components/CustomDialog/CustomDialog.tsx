import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useCustomDialog from "hooks/useCustomDialog";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { StyledIconButton } from "./customDialog.styles";
import { Breakpoint } from "@mui/material";

interface CustomDialogProps
  extends Pick<ReturnType<typeof useCustomDialog>, "handleClose" | "isOpen"> {
  children: React.ReactNode;
  title?: string;
  maxWidth?: Breakpoint;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  handleClose,
  isOpen,
  children,
  title,
  maxWidth,
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={maxWidth}>
      <StyledIconButton onClick={handleClose}>
        <CloseIcon />
      </StyledIconButton>
      {!!title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
