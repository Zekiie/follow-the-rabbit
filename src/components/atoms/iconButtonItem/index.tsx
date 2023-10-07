import React, { FC } from 'react';
import { IconButton, Tooltip } from '@mui/material';

import { IconButtonItemType } from '../../../types/iconButton.types';
import * as styles from '../../molecules/header/header.module.css';

const IconButtonItem: FC<IconButtonItemType> = ({
  tooltipTitle,
  onClick,
  open,
  iconClassName,
}) => (
  <Tooltip key={iconClassName} title={tooltipTitle}>
    <IconButton
      onClick={onClick}
      size="small"
      aria-controls={open ? 'account-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
    >
      <span className={`${styles[iconClassName]} ${styles.icon}`}></span>
    </IconButton>
  </Tooltip>
);

export default IconButtonItem;
