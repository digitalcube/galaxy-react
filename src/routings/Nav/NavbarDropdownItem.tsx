import React, { FC, PropsWithChildren } from 'react';
import { DropdownItem, DropdownItemProps } from 'reactstrap';
import Link from '../Link/Link';

export type NavbarDropdownItemProps = PropsWithChildren<{
  href?: string;
}> &
  DropdownItemProps;
export const NavbarDropdownItem: FC<NavbarDropdownItemProps> = ({
  href,
  children,
  ...dropdownItemProps
}) => {
  return (
    <DropdownItem {...dropdownItemProps}>
      {href ? (
        <Link
          className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between"
          href={href}
        >
          {children}
        </Link>
      ) : (
        <span className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between">
          {children}
        </span>
      )}
    </DropdownItem>
  );
};
