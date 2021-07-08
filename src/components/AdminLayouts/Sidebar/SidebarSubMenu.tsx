import React, { FC } from 'react';
import { Link } from '../../../routings';

export type SidebarSubMenuItemProps = {
  to: string;
  label: string;
  active?: boolean;
};
export const SidebarSubMenuItem: FC<SidebarSubMenuItemProps> = ({
  to,
  label,
  active,
}) => {
  return (
    <li>
      <Link className={`${active ? 'active' : ''}`} href={to}>
        {label}
      </Link>
    </li>
  );
};

export type SidebarSubMenuProps = {
  className?: string;
  items: Array<SidebarSubMenuItemProps>;
};
export const SidebarSubMenu: FC<SidebarSubMenuProps> = ({
  className,
  items,
}) => {
  return (
    <ul className={`sub-menu${className ? ` ${className}` : ''}`}>
      {items.map((item, i) => (
        <SidebarSubMenuItem {...item} key={i} />
      ))}
    </ul>
  );
};
