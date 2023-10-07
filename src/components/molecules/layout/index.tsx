import React, { FC } from 'react';
import Header from '../header';
import Footer from '../footer';

import * as styles from './layout.module.css';
import '../../../styles/global.css';

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout: FC<LayoutInterface> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
