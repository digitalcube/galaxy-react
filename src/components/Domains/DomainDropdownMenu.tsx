import React, { FC } from 'react';
import { DropdownMenu, DropdownMenuProps } from '../Dropdown/DropdownMenu';

export type DomainDropdownMenuProps = DropdownMenuProps;
export const DomainDropdownMenu: FC<DomainDropdownMenuProps> = (props) => {
  const className = `ml-3 domain-action${
    props.className ? ` ${props.className}` : ''
  }`;
  return <DropdownMenu {...props} className={className} />;
};
