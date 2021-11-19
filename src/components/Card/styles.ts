import styled from "styled-components";
import { Box } from "@material-ui/core";

export const Container = styled(Box)``;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  margin: 10px 0 10px 0;
  transition: 0.2s;
  border: 2px solid var(--gray3);
  :hover {
    border: 2px solid var(--color-primary);
  }
  img {
    width: 82px;
    height: 80px;
  }
  h4 {
    color: var(--color-primary);
  }
`;

export const H3 = styled.h3`
  width: 100%;
  text-align: center;

  color: var(--color-primary);
`;
