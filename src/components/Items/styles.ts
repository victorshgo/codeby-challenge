import styled from "styled-components";

export const Items = styled.div`
  width: 100%;
  padding: 0.75em 1.5em;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  min-width: 100px;
  height: 100px;
  margin-right: 1em;
  border: 1px solid #d2d2d2;
`;

export const Name = styled.p`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Prices = styled.div`
  display: flex;
  flex-direction: column;

  .price {
    font-size: 12px;
    font-weight: 500;
    color: #b5b5b6;
  }

  .sellingPrice {
    font-size: 14px;
    font-weight: 500;
  }
`;
