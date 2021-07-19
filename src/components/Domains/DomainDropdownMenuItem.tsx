import React, { FC, ReactNode, PropsWithChildren } from 'react';
import {
  DropdownMenuItem,
  DropdownMenuItemProps,
} from '../Dropdown/DropdownMenuItem';

export type DomainDropdownMenuItemProps = PropsWithChildren<{
  icon?: ReactNode;
}> &
  DropdownMenuItemProps;
export const DomainDropdownMenuItem: FC<DomainDropdownMenuItemProps> = (
  props
) => <DropdownMenuItem {...props} />;
