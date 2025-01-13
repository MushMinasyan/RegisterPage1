import React, { PropsWithChildren } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface Props extends PropsWithChildren {}
const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
