import React from "react";
import styled from "styled-components";
import MaterialButton from "@material-ui/core/Button";

const StyledButton = styled(MaterialButton)`
  && {
    color: white;
    background: #5aac44;
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
