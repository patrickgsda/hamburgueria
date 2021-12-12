import styled from "styled-components";

export const Container = styled.button`
  background: var(--color-primary);
  font-size: 16px;
  color: white;
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 5px;
  opacity: 0.9;

  :hover {
    transition: 0.5s;
    opacity: 1;
  }

  :active {
    background: var(--color-primary);
  }
`;
