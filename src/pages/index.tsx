import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout/Layout';

import { home, content } from '../styles/index.module.css';
import { Grid } from '@mui/material';
import OrderForm from '../components/form/orderForm';

const HomePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className={home}>
        <div className={content}>
          <Grid
            container
            columnSpacing={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <OrderForm />
            </Grid>
            <Grid item xs={12} md={6}>
              I'm here
            </Grid>
          </Grid>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
