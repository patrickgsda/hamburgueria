import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  margin-top: 90px;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 140px;
  background: var(--gray0);
  img {
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
  border-radius: 5px 5px 0px 0px;
  justify-content: center;
  align-items: flex-start;
  height: 346px;
  border: 2px solid var(--gray0);
  transition: 0.2s;
  margin: 0 0 40px 0;
  justify-content: space-between;

  :hover {
    border: 2px solid var(--color-primary);
  }
  .price {
    font-size: 14px;
    font-weight: regular;
    color: var(--color-primary);
  }
  .description {
    font-size: 12px;
    color: var(--gray2);
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 180px;
  width: 100%;
  padding: 10px;
`;
