import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--gray0);
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: baseline;
  h1 {
    font-size: 26px;
    font-weight: bold;
    margin-right: 10px;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-secondary);
  }
`;

export const ConatinerIcons = styled.div`
  display: flex;
  font-size: 23px;
  p {
    margin: 10px;
  }
`;
