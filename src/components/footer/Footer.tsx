import React, { FC } from 'react';
import {
  footer,
  iconContainer,
  iconItem,
  copyright,
} from './footer.module.css';
import { SOCIAL_MEDIA_DETAILS } from '../../constants/constants';

const Footer: FC = () => (
  <footer className={footer}>
    <div className={iconContainer}>
      {SOCIAL_MEDIA_DETAILS.map(({ name, link, icon }) => (
        <a href={link} target="_blank">
          <img src={icon} alt={name} className={iconItem} />
        </a>
      ))}
    </div>
    <p className={copyright}>&copy; Copyright 2023 MoZi</p>
  </footer>
);

export default Footer;
