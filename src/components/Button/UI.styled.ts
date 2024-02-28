import styled from "styled-components";

import { IBtnProps } from "./index";

export const Base = styled.button<IBtnProps>`
  background-color: ${(props) => (props.disabled ? "grey" : "inherit")};
  min-width: 120px;
  min-height: 25px;
  border: 1px solid grey;
  border-radius: 2px;
  color: black;

  ${(props) =>
    props.size === "small" &&
    `
    min-width: 80px;
  `}

  ${(props) =>
    props.size === "medium" &&
    `
    min-width: 120px;
  `}
  
  ${(props) =>
    props.size === "large" &&
    `
    min-width: 180px;
  `}

  &:hover {
    background-color: light-grey;
    cursor: pointer;
  }
`;

export const Primary = styled(Base)`
  background-color: ${(props) => (props.disabled ? "grey" : "#03f7eb")};

  &:hover {
    background-color: #02cac0;
  }
`;

export const Secondary = styled(Base)`
  background-color: ${(props) => (props.disabled ? "grey" : "#00f5cc")};

  &:hover {
    background-color: #00b295;
  }
`;

export const Danger = styled(Base)`
  background-color: ${(props) => (props.disabled ? "grey" : "#d5345c")};

  &:hover {
    background-color: #ab2346;
  }
`;
