import React, { FC, ReactNode, PropsWithChildren } from 'react';
import { DropdownItem, DropdownItemProps } from 'reactstrap';
export type SiteCardDropdownItemProps = PropsWithChildren<{
  icon?: ReactNode;
}> &
  DropdownItemProps;
export const SiteCardDropdownItem: FC<SiteCardDropdownItemProps> = ({
  children,
  icon,
  ...dropdownItemProps
}) => {
  const className = [
    'dropdown-item px-3 py-2 d-flex align-items-center justify-content-between',
    dropdownItemProps.className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <DropdownItem className={className} {...dropdownItemProps}>
      {children}
      {icon ? <i aria-hidden="true">{icon}</i> : null}
    </DropdownItem>
  );
};
