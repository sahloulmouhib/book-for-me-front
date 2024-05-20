import React from "react";
import {
  StyledCardContainer,
  StyledContainer,
  StyledDescription,
  StyledPriceContainer,
  StyledPriceTitle,
  StyledTextContainer,
  StyledTitle,
} from "./companyService.styles";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Stack } from "@mui/material";

interface CompanyServiceProps {
  title: string;
  price: number;
  description?: string;
  onEditPress?: () => void;
  onDeletePress?: () => void;
}

const CompanyService: React.FC<CompanyServiceProps> = ({
  description,
  price,
  title,
  onDeletePress,
  onEditPress,
}) => {
  return (
    <StyledContainer>
      <StyledCardContainer>
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          {!!description && (
            <StyledDescription>{description}</StyledDescription>
          )}
        </StyledTextContainer>
        <StyledPriceContainer>
          <StyledPriceTitle>{price}</StyledPriceTitle>
          <AttachMoneyOutlinedIcon
            style={{ height: 15, width: 15 }}
            color="primary"
          />
        </StyledPriceContainer>
      </StyledCardContainer>
      <Stack>
        <Button>
          <EditIcon onClick={onEditPress} style={{ height: 20, width: 20 }} />
        </Button>
        <Button>
          <DeleteIcon
            onClick={onDeletePress}
            style={{ height: 20, width: 20 }}
          />
        </Button>
      </Stack>
    </StyledContainer>
  );
};

export default CompanyService;
