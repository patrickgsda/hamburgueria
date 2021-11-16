import styled from "styled-components";

export const Container = styled.button`
  background: var(--color-primary);
  color: white;
  font-size: 16px;
  font-weight: bold;
  width: 130px;
  height: 50px;
  border: none;
  border-radius: 5px;

  :hover {
    transition: 0.4s;
    opacity: 0.5;
  }
`;
