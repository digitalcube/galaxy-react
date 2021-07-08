import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { SidebarBackTo, SidebarBackToProps } from './SidebarBackTo';

export type AdminLayoutSidebarProps = PropsWithChildren<{
  className?: string;
  backTo?: SidebarBackToProps;
  header?: ReactNode;
}>;
export const AdminLayoutSidebar: FC<AdminLayoutSidebarProps> = ({
  backTo,
  className,
  header,
  children,
}) => {
  return (
    <div
      className={`${!!backTo ? 'pt-4 ' : ''}shifter-dashboard-sidebar${
        className ? ` ${className}` : ''
      }`}
    >
      <SidebarBackTo {...backTo} />
      {header}

      <nav className={`${!!header ? 'mt-4 ' : ''}sidebar-nav`}>
        <ul>{children}</ul>
      </nav>
    </div>
  );
};
