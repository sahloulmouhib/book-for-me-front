import React from "react";

import styles from "./companyHomePage.styles";
import CustomButton from "components/CustomButton/CustomButton";
import { Box } from "@mui/material";
import useCustomDialog from "hooks/useCustomDialog";
import CustomDialog from "components/CustomDialog/CustomDialog";

interface CompanyHomePageProps {}

const CompanyHomePage: React.FC<CompanyHomePageProps> = ({}) => {
  const { handleClose, isOpen, handleOpen } = useCustomDialog();
  return (
    <Box>
      <CustomButton title="Create company" onClick={handleOpen} />
      <CustomDialog handleClose={handleClose} isOpen={isOpen} />
    </Box>
  );
};

export default CompanyHomePage;
