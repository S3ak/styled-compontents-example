import styled from "styled-components";

export const Container = styled.div<{ color: string }>`
  width: 100%;
  height: 50vh;
  background-color: ${({ color }) => (color === "dark" ? "black" : "white")};
  color: ${({ color }) => (color === "dark" ? "white" : "black")};
`;
