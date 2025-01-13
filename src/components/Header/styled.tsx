import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 10px;
  font-weight: bold;

  &.active {
    color: #007bff;
    text-decoration: underline;
  }

  &:hover {
    color: #0056b3;
  }
`;
export const userNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 10px;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }
`;
