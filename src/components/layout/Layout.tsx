import React, { FC } from 'react';
import Header from '../header/Header';

import { main } from './layout.module.css';
import '../../styles/global.css';
import Footer from '../footer/Footer';

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout: FC<LayoutInterface> = ({ children }) => (
  <>
    <Header />
    <main className={main}>{children}</main>
    <Footer />
  </>
);

export default Layout;
