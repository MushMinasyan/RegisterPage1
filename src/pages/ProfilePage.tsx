import { UsersContext } from "../components/context/UsersContext";
import React, { useContext } from "react";

const ProfilePage = () => {
  const { currentUser } = useContext(UsersContext);

  return (
    <div>
      {currentUser ? (
        <div>
          <p>Name: {currentUser.name}</p>
          <p>Email: {currentUser.email}</p>
          <p>Phone: {currentUser.phoneNumber}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ProfilePage;
