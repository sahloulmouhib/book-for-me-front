import React from "react";
import { StyledOrText, StyledLine, StyledStack } from "./orDivider.styles";

const OrDivider: React.FC = () => {
  return (
    <StyledStack>
      <StyledLine />
      <StyledOrText>or</StyledOrText>
      <StyledLine />
    </StyledStack>
  );
};

export default OrDivider;
