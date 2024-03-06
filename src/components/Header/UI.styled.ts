import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;

  section {
    flex: 1;

    &:first-child {
      flex: 3;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;

  a {
    flex: 1;
    min-height: 48px;
    min-width: 48px;
    border: 1px solid white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CountContainer = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  border-radius: 100%;
  background-color: red;
  position: absolute;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
`;
