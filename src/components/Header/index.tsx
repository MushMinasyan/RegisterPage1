import React, { useContext } from "react";
import * as Styled from "./styled";
import { UsersContext } from "../context/UsersContext";

const Header: React.FC = () => {
  const { currentUser } = useContext(UsersContext);

  return (
    <Styled.Header>
      {currentUser ? (
        <Styled.userNavLink to={"/profile"}>
          {currentUser.name}
        </Styled.userNavLink>
      ) : (
        <>
          <Styled.StyledNavLink to="/login">Login</Styled.StyledNavLink>
          <Styled.StyledNavLink to="/registration">
            Sign Up
          </Styled.StyledNavLink>
        </>
      )}
    </Styled.Header>
  );
};

export default Header;
