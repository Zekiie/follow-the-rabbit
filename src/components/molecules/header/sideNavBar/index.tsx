import React, { FC } from 'react';
import { IconButtonItemType } from '../../../../types/iconButton.types';
import IconButtonItem from '../../../atoms/iconButtonItem';

interface SideNavBarInterface {
  items: IconButtonItemType[];
}

const SideNavBar: FC<SideNavBarInterface> = ({ items }) => (
  <>
    {items.map(({ tooltipTitle, onClick, open, iconClassName }) => (
      <IconButtonItem
        key={iconClassName}
        iconClassName={iconClassName}
        onClick={onClick}
        tooltipTitle={tooltipTitle}
        open={open}
      />
    ))}
  </>
);

export default SideNavBar;
