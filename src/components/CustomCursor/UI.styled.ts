import styled from "styled-components";

interface IProps {
  x?: number | undefined | null;
  y?: number | undefined | null;
}

export const Base = styled.span<IProps>`
  display: block;
  position: fixed;
  z-index: 9999;
  background-color: red;
  width: 5px;
  height: 5px;
  border: 1px solid grey;
  border-radius: 100%;
  top: ${({ y }) => (y ? y + 10 : 0)}px;
  left: ${({ x }) => (x ? x + 10 : 0)}px;
`;
