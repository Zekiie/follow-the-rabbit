import React, { FC, useState, useEffect } from 'react';

import Layout from '../../molecules/layout';
import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import * as styles from './homeBody.module.css';
import {getRecipes} from "../../../core/recepies";

const HomeBody: FC = () => {
  const [dataVaule, setValue] = useState('');
  useEffect(() => {
    getRecipes()
  }, [])

  return (
      <Layout>
        <Grid container spacing={2} className={styles.container}>
          <Grid item xs={6} className={styles.itemContainer}>
            <Chip className={styles.chip} label="Easy Peasy" />
            <Box className={styles.textContainer}>
              <Typography variant="h2" className={styles.title}>
                LET’S ENJOY COOKING
              </Typography>
              <Typography variant="h5" className={styles.text}>
                Making Our Every Day Cooking Choice Easy and Reduce Stress for
                choosing meal for today.
              </Typography>
            </Box>
            <Box className={styles.buttonGroup}>
              <Button className={styles.showAll} variant="contained">
                All Recipes
              </Button>
              <Button className={styles.choice} variant="contained">
                Let's choice
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6} className={styles.content}>
            <Box className={styles.image} />
          </Grid>
        </Grid>
      </Layout>
  );
}

export default HomeBody;
