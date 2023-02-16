import React, { FC } from 'react';
import Header from '../header/Header';

import '../../styles/global.css';
import Footer from '../footer/Footer';

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout: FC<LayoutInterface> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
