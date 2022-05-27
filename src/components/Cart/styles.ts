import styled from "styled-components";

export const Title = styled.h3`
  margin: 0.75em 0;
  text-align: center;
  border-bottom: 1px solid #d2d2d2;
`;

export const Products = styled.div`
  padding-bottom: 0.75em;
`;

export const Border = styled.div`
  width: 100%;
  padding: 0 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
`;

export const Price = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Congratulations = styled.span`
  margin-bottom: 1.5em;
  padding: 0.5em 1em;
  font-size: 14px;
  font-weight: 500;
  color: #1d7a08;
  background-color: #c7ffa6;
  border-radius: 20px;
  
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const Button = styled.button`
  width: calc(100% - 3em);
  height: 50px;
  margin: 1.5em;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: #3a74f2;
  border: none;
  border-radius: 10px;
`;
