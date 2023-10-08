import React, { FC, useCallback, useMemo, useState } from 'react';
import { Box, Link, MenuList, MenuItem } from '@mui/material';

import * as styles from './header.module.css';
import logo from '../../../static/img.png';

import { PAGES } from '../../../constants/pages';
import SideNavBar from './sideNavBar';
import Search from '../../atoms/search';

const Header: FC = () => {
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);

  const openSearchBar = useCallback(
    () => setSearchBarOpen(true),
    [setSearchBarOpen],
  );
  const closeSearchBar = useCallback(
    () => setSearchBarOpen(false),
    [setSearchBarOpen],
  );

  const sideNawBarConfig = useMemo(
    () => [
      {
        tooltipTitle: isSearchBarOpen ? 'Close search' : 'Search meal',
        onClick: isSearchBarOpen ? closeSearchBar : openSearchBar,
        open: isSearchBarOpen,
        iconClassName: isSearchBarOpen ? 'close' : 'search',
      },
      {
        tooltipTitle: 'Account settings',
        onClick: () => {},
        open: false,
        iconClassName: 'profile',
      },
      {
        tooltipTitle: 'Menu',
        onClick: () => {},
        open: false,
        iconClassName: 'menu',
      },
    ],
    [isSearchBarOpen, openSearchBar, closeSearchBar],
  );

  return (
    <header className={styles.header}>
      <Link href="/" underline="none">
        <img src={logo} alt="logo" width={100} className={styles.logo} />
      </Link>
      <MenuList
        className={styles.navBarList}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        {PAGES.map(({ name, path }) => (
          <MenuItem key={path} className={styles.navBarItem}>
            <Link href={path} underline="none">
              {name}
            </Link>
          </MenuItem>
        ))}
      </MenuList>
      <Box
        className={`${styles.sideNavBar} ${
          isSearchBarOpen ? styles['sideNavBar__search'] : ''
        }`}
      >
        <Search isSearchBarOpen={isSearchBarOpen} />
        <SideNavBar items={sideNawBarConfig} />
      </Box>
    </header>
  );
};
export default Header;
