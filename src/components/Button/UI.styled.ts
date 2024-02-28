import styled from "styled-components";

export const Base = styled.button`
  background-color: grey;
  min-width: 100px;
  min-height: 25px;
  border: 1px solid grey;
  border-radius: 2px;
  color: black;

  &:hover {
    background-color: light-grey;
    cursor: pointer;
  }
`;

export const Primary = styled(Base)`
  background-color: #03f7eb;

  &:hover {
    background-color: #02cac0;
  }
`;

export const Secondary = styled(Base)`
  background-color: #00f5cc;

  &:hover {
    background-color: #00b295;
  }
`;
