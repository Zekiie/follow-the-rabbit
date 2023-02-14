import React, { FC } from "react";
import Header from "../header/Header";

import { main } from "./layout.module.css";
import "../../styles/global.css";

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout: FC<LayoutInterface> = ({ children }) => (
  <>
    <Header />
    <main className={main}>{children}</main>
    <footer>footer</footer>
  </>
);

export default Layout;
