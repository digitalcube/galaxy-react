import React, { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import {
  Dropdown as ReactstrapDropdown,
  DropdownMenu as ReactstrapDropdownMenu,
  DropdownToggle as ReactstrapDropdownToggle,
} from 'reactstrap';

export type DropdownMenuProps = PropsWithChildren<{
  right?: boolean;
  icon?: ReactNode;
  className?: string;
}>;
export const DropdownMenu: FC<DropdownMenuProps> = ({
  children,
  icon,
  right,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <ReactstrapDropdown isOpen={open} toggle={toggle} className={className}>
      <ReactstrapDropdownToggle
        className="dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup={true}
        aria-expanded={false}
        tag="span"
      >
        <i aria-hidden="true">{icon || <FaEllipsisH className="d-block" />}</i>
      </ReactstrapDropdownToggle>
      <ReactstrapDropdownMenu right={right}>{children}</ReactstrapDropdownMenu>
    </ReactstrapDropdown>
  );
};
