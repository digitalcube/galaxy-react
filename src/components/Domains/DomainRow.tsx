import React, { FC, PropsWithChildren } from 'react';

export type DomainRowProps = PropsWithChildren<{
  className?: string;
}>;
export const DomainRow: FC<DomainRowProps> = ({ className, children }) => {
  return (
    <div className={`live-domain${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
};
