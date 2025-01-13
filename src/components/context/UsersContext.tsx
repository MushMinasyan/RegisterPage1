import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

interface IUserLoginData {
  email: string;
  password: string;
}

interface IUserRegistrationData extends IUserLoginData {
  name: string;
  phoneNumber: string;
}

interface IUser extends IUserRegistrationData {
  id: number;
}

interface IUsersContext {
  currentUser: IUser | null;
  registerNewUser: (registrationData: IUserRegistrationData) => void;
  loginUser: (loginData: IUserLoginData) => void;
}

export const UsersContext = React.createContext<IUsersContext>({
  currentUser: null,
  registerNewUser: () => {},
  loginUser: () => {},
});

export const UsersContextProvider = ({ children }: PropsWithChildren) => {
  const [registeredUsers, setRegisteredUsers] = useState<IUser[]>([]);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const currentUser = useMemo(
    () =>
      registeredUsers.find(
        (existingUser) => existingUser.id === currentUserId
      ) ?? null,
    [currentUserId, registeredUsers]
  );

  const registerNewUser = useCallback(
    (user: IUserRegistrationData) => {
      if (
        registeredUsers.find(
          (existingUser) => existingUser.email === user.email
        )
      ) {
        return;
      }
      setRegisteredUsers((prev) => [...prev, { ...user, id: prev.length }]);
    },
    [registeredUsers]
  );

  const loginUser = useCallback(
    (loginData: IUserLoginData) => {
      const foundUser = registeredUsers.find(
        (existingUser) => existingUser.email === loginData.email
      );
      if (foundUser && foundUser.password === loginData.password) {
        setCurrentUserId(foundUser.id);
      }
    },
    [registeredUsers]
  );

  return (
    <UsersContext.Provider
      value={{
        currentUser,
        registerNewUser,
        loginUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
