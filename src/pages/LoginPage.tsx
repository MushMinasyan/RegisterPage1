import React, { useContext, useEffect } from "react";
import * as Styled from "./styled";
import { useState } from "react";
import { UsersContext } from "../components/context/UsersContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, currentUser } = useContext(UsersContext);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser({ email, password });
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/profile");
    }
  }, [currentUser]);

  return (
    <>
      <Styled.RegisterDiv>
        <Styled.FormDiv onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Log in" />
        </Styled.FormDiv>
      </Styled.RegisterDiv>
    </>
  );
};
export default LoginPage;
