import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Link } from '../../../routings/Link/Link';
import { SidebarSubMenu, SidebarSubMenuItemProps } from './SidebarSubMenu';

export type SidebarMenuItemProps = PropsWithChildren<{
  to?: string;
  icon?: ReactNode;
  active?: boolean;
  deactive?: boolean;
  submenus?: Array<SidebarSubMenuItemProps>;
  shouldShowSubmenus?: boolean;
  pathname?: string;
}>;
export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  children,
  icon,
  to,
  active,
  deactive,
  submenus,
  shouldShowSubmenus = false,
  pathname,
}) => {
  const classNames = [
    'px-3 py-2 rounded d-inline-flex align-items-center justify-content-center',
  ];
  if (active) classNames.push('active');
  if (deactive) classNames.push('deactive');
  return (
    <li>
      <Link className={classNames.join(' ')} href={to}>
        {icon ? (
          <i className="mr-2" aria-hidden="true">
            {icon}
          </i>
        ) : null}
        {children}
      </Link>
      {shouldShowSubmenus && submenus ? (
        <SidebarSubMenu items={submenus} pathname={pathname} />
      ) : null}
    </li>
  );
};
