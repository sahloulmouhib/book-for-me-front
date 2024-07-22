import { useState } from "react";

const useCustomDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  return {
    isOpen,
    handleOpen,
    handleClose,
    handleToggle,
  };
};

export default useCustomDialog;
