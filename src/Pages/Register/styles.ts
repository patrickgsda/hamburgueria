import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FormContainer = styled.div`
  width: 90%;
  max-width: 500px;
  margin-top: 250px;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    input {
      margin-bottom: 2px;
    }

    p {
      color: var(--gray-50);
      font-size: 14px;
      margin: 10px auto;
    }
  }
`;
