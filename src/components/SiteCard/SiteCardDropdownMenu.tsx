import React, { FC } from 'react';
import { DropdownMenu, DropdownMenuProps } from '../Dropdown/DropdownMenu';

export type SiteCardDropdownMenuProps = DropdownMenuProps;
export const SiteCardDropdownMenu: FC<SiteCardDropdownMenuProps> = (props) => {
  const className = `ml-4 site-control${
    props.className ? ` ${props.className}` : ''
  }`;
  return <DropdownMenu {...props} className={className} />;
};
