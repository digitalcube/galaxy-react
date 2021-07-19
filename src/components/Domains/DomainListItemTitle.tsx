import React, { FC, PropsWithChildren } from 'react';

export type DomainListItemTitleProps = PropsWithChildren<{
  className?: string;
}>;
export const DomainListItemTitle: FC<DomainListItemTitleProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`domain-name font-weight-bold${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  );
};
