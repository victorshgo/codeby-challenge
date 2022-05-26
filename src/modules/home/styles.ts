import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  line-height: 1.15;

  a {
    color: #0070f3;
    text-decoration: none;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;
