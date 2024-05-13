import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Theme } from "@mui/material";

interface CustomLoaderProps {
  isLoaderVisible: boolean;
  hideLoader: () => void;
}

const CustomLoader: React.FC<CustomLoaderProps> = ({
  hideLoader,
  isLoaderVisible,
}) => {
  const getZIndex = (theme: Theme) => theme.zIndex.drawer + 1;
  return (
    <Backdrop
      sx={{ zIndex: getZIndex }}
      open={isLoaderVisible}
      onClick={hideLoader}
    >
      <CircularProgress color="info" size={60} />
    </Backdrop>
  );
};

export default CustomLoader;
