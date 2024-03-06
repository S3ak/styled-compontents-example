import styled from "styled-components";

export const Container = styled.div``;

export const Article = styled.article`
  position: fixed;
  top: 10vh;
  right: 5vw;
  border: 3px solid grey;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 0.8rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  max-width: 50vw;
  min-width: 260px;
`;

export const Body = styled.p`
  font-size: 0.8rem;
`;

export const Actions = styled.div`
  flex: 1;
`;

export const Section = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-end;

  &:first-child {
    flex: 1;
  }

  p {
    margin: 0;
  }
`;
