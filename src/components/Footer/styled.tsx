import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  color: white;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export const P = styled.p`
  font-size: 1.2rem;
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`;
