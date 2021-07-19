import React, { FC, PropsWithChildren } from 'react';

export type DomainListRowProps = PropsWithChildren<{
  className?: string;
}>;
export const DomainListRow: FC<DomainListRowProps> = ({
  className,
  children,
}) => {
  return (
    <div className={`domain-list${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
};
