import React, { useContext, useState } from "react";
import * as Styled from "./styled";
import { UsersContext } from "../components/context/UsersContext";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { registerNewUser } = useContext(UsersContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerNewUser({
      email,
      phoneNumber: phone,
      password,
      name,
    });
  };

  return (
    <Styled.RegisterDiv>
      <Styled.FormDiv onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(element) => setEmail(element.target.value)}
        />
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(element) => {
            setPhone(element.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(element) => setName(element.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(element) => {
            setPassword(element.target.value);
          }}
        />

        <input type="submit" value="Sign Up" />
      </Styled.FormDiv>
    </Styled.RegisterDiv>
  );
};

export default RegisterPage;
