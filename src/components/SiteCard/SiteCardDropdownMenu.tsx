import React, { FC, ReactNode, useState, PropsWithChildren } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

export type SiteCardDropdownMenuProps = PropsWithChildren<{
  icon?: ReactNode;
  right?: boolean;
}>;
export const SiteCardDropdownMenu: FC<SiteCardDropdownMenuProps> = ({
  icon,
  children,
  right = true,
}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <Dropdown
      isOpen={open}
      toggle={toggle}
      className="ml-4 site-control"
      direction="down"
    >
      <DropdownToggle
        className="dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup={true}
        aria-expanded={false}
        tag="span"
      >
        <i aria-hidden="true">{icon || <FaEllipsisH className="d-block" />}</i>
      </DropdownToggle>
      <DropdownMenu right={right}>{children}</DropdownMenu>
    </Dropdown>
  );
};
