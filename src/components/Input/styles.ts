import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: column;

  input {
    font-size: 16px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 15px;
    background: var(--gray-0);
    border: 2px solid var(--gray-0);
    box-sizing: border-box;
    border-radius: 8px;
    border: 2px solid #333333;
  }

  span {
    color: var(--negative);
    font-size: 10px;
    padding-left: 5px;
  }
`;
