import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout/Layout';

import { home } from '../styles/index.module.css';
const HomePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className={home}>This is home page</section>
    </Layout>
  );
};

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
