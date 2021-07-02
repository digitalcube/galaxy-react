import React, { FC, PropsWithChildren } from 'react';
import { DropdownItem } from 'reactstrap';
import Link from '../Link/Link';

export type NavbarDropdownItemProps = PropsWithChildren<{
  href: string;
}>;
export const NavbarDropdownItem: FC<NavbarDropdownItemProps> = ({
  href,
  children,
}) => {
  return (
    <DropdownItem>
      <Link
        className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between"
        href={href}
      >
        {children}
      </Link>
    </DropdownItem>
  );
};
