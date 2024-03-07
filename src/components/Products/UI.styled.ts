import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1.4rem;
`;

export const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ListItem = styled.article`
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0;
  min-width: 280px;
  min-height: 100px;
`;
