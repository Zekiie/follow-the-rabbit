import React, { FC } from 'react';
import { header, navBarList, navBarItem } from './header.module.css';
import { Link } from 'gatsby';
import { PAGES } from '../../constants/constants';

const Header: FC = () => (
  <header className={header}>
    <div>
      <Link to="/">
        <img src="/logo.png" alt="logo" width={100} />
      </Link>
    </div>
    <nav>
      <ul className={navBarList}>
        {PAGES.map(({ name, path }) => (
          <li className={navBarItem}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
export default Header;
