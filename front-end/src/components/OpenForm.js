import React from "react";
import Icon from "@material-ui/core/Icon";
import styled from "styled-components";

export function OpenForm ({ children, onClick }) {
//   const buttonTextOpacity = list ? 1 : 0.5;
//   const buttonTextColor = list ? "white" : "inherit";
//   const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

  const OpenFormButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    margin-left: 8px;
    width: 240px;
    padding-left: 10px;
    padding-right: 10px;
    opacity: 0.5;
    color: inherit;
    background-color: inherit;
  `;

  return (
    <OpenFormButton onClick={onClick}>
      <Icon>add</Icon>
      <p style={{ flexShrink: 0 }}>{children}</p>
    </OpenFormButton>
  );
};

