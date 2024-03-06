import styled from "styled-components";

export const Container = styled.div``;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const List = styled.ul`
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  max-width: 300px;
`;

export const Healthbar = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  height: 20px;
  background-color: red;
`;

export const HealthbarContainer = styled.div`
  width: 100%;
  max-width: 300px;
  min-width: 180px;
  height: 20px;
`;
