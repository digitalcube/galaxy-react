import React, { FC, PropsWithChildren } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Avatar, AvatarProps } from '../../components/Avatar/Avatar';

export type NavbarDropdownProps = PropsWithChildren<{
  avatar: AvatarProps;
}>;

export const NavbarDropdown: FC<NavbarDropdownProps> = ({
  children,
  avatar,
}) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle
        nav
        role="button"
        data-toggle="dropdown"
        className="nav-link font-weight-bold dropdown-toggle"
      >
        <Avatar {...avatar} />
      </DropdownToggle>
      <DropdownMenu right>{children}</DropdownMenu>
    </UncontrolledDropdown>
  );
};
