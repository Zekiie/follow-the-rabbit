import React, { FC, useMemo } from 'react';
import * as styles from './footer.module.css';
import { Box, Link } from '@mui/material';

const Footer: FC = () => {
  const linksConfig = useMemo(
    () => [
      { to: 'https://www.facebook.com/MonopolyGO', classes: styles.facebook },
      { to: 'https://www.facebook.com/MonopolyGO', classes: styles.instagram },
      { to: 'https://www.facebook.com/MonopolyGO', classes: styles.twitter },
    ],
    [],
  );

  return (
    <footer className={styles.footer}>
      <Box className={styles.image}></Box>
      <Box className={styles.content}>
        Mohammediti is the author of the most recipes. The most important thing
        is put rice in the water at least for 30 mins.
      </Box>
      <Box className={styles.socialMediaBar}>
        {linksConfig.map(({ to, classes }) => (
          <Link href={to} className={classes} />
        ))}
        <Box className={styles.line} />
      </Box>
    </footer>
  );
};

export default Footer;
