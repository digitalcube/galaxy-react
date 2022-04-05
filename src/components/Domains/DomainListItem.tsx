import React, { FC, PropsWithChildren } from 'react';
import { DomainListItemTitle } from './DomainListItemTitle';

export type DomainListItemProps = PropsWithChildren<{
  domainName: string;
}>;
export const DomainListItem: FC<DomainListItemProps> = ({
  domainName,
  children,
}) => {
  return (
    <div className="domain-list-item mt-2 px-3 py-4 rounded d-flex align-items-center justify-content-between">
      {domainName ? (
        <DomainListItemTitle>{domainName}</DomainListItemTitle>
      ) : null}
      <div className="domain-misc d-flex align-items-center">{children}</div>
    </div>
  );
};
