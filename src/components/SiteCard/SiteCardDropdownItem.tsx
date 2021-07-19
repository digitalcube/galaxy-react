import React, { FC } from 'react';
import {
  DropdownMenuItem,
  DropdownMenuItemProps,
} from '../Dropdown/DropdownMenuItem';
export type SiteCardDropdownItemProps = DropdownMenuItemProps;
export const SiteCardDropdownItem: FC<SiteCardDropdownItemProps> = (props) => (
  <DropdownMenuItem {...props} />
);
