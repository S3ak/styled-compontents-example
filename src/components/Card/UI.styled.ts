import styled from "styled-components";

const xsBreakpoint = "768px";

export const Container = styled.div``;

export const Article = styled.article`
  border: 1px solid white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 5vw;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;

  @media (min-width: ${xsBreakpoint}) {
    align-items: center;
    flex-wrap: no-wrap;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  min-width: 220x;
  cursor: pointer;
`;

export const Body = styled.p`
  font-size: 1.5rem;
`;

export const Section = styled.section`
  flex: 1;

  &:first-child {
    border-bottom: 1px solid white;
    flex: 2;
    min-width: 280px;

    @media (min-width: ${xsBreakpoint}) {
      border-bottom: 0 solid white;
    }
  }
`;
