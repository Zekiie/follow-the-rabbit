import React, { FC } from 'react';
import { header, navBarList, navBarItem } from './header.module.css';
import { Link } from 'gatsby';

const Header: FC = () => (
  <header className={header}>
    <div>
      <Link to="/">
        <img src="/logo.png" alt="logo" width={100} />
      </Link>
    </div>
    <nav>
      <ul className={navBarList}>
        <li className={navBarItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={navBarItem}>
          <Link to="/about">About Me</Link>
        </li>
        <li className={navBarItem}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className={navBarItem}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={navBarItem}>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
