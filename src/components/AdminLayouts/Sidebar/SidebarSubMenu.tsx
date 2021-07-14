import React, { FC, useMemo } from 'react';
import { Link } from '../../../routings/Link/Link';

export type SidebarSubMenuItemProps = {
  to: string;
  label: string;
  active?: boolean;
  pathname?: string;
};
export const SidebarSubMenuItem: FC<SidebarSubMenuItemProps> = ({
  to,
  label,
  active,
  pathname,
}) => {
  const isActive = useMemo(() => {
    if (active !== undefined) return active;
    if (!pathname || !to) return false;
    return pathname === to;
  }, [pathname, to, active]);
  return (
    <li>
      <Link className={`${isActive ? 'active' : ''}`} href={to}>
        {label}
      </Link>
    </li>
  );
};

export type SidebarSubMenuProps = {
  className?: string;
  items: Array<Omit<SidebarSubMenuItemProps, 'pathname'>>;
  pathname?: string;
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
