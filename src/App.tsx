import React from "react";
import AppLayout from "./components/layouts/AppLayout";
import AppRoutes from "./Routes";
import { ThemeProvider } from "styled-components";
import { UsersContextProvider } from "./components/context/UsersContext";

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <UsersContextProvider>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </UsersContextProvider>
    </ThemeProvider>
  );
};

export default App;
