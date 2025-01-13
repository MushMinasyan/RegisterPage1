import styled from "styled-components";
export const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #f0f4f8;
`;
export const RegisterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f0f4f8;
`;

export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  input[type="submit"] {
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #0056b3;
    }
  }
`;
