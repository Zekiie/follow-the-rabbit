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
      <Box
        className={styles.socialMediaBar}
        display={{ xs: 'none', md: 'block', lg: 'block' }}
      >
        {linksConfig.map(({ to, classes }, i) => (
          <Link key={to + i} href={to} className={classes} />
        ))}
        <Box className={styles.line} />
      </Box>
    </footer>
  );
};

export default Footer;
