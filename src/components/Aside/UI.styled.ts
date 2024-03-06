import styled from "styled-components";

export const Container = styled.aside<{ isVisible: boolean }>`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  width: 80vw;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.2rem;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(100%)"};
  background-color: black;

  section {
    flex: 1 1 auto;
    width: 100%;
    max-width: 400px;
    align-items: center;

    &:first-child {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
    }

    &:nth-child(2) {
      flex: 2 1 auto;
      overflow-y: auto;
    }
  }
`;

export const ActionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
