import React, { FC, ReactNode } from 'react';
import { PropsWithChildren } from 'react';

export type SiteCardDataProps = PropsWithChildren<{
  name: string;
  tips?: ReactNode
}>;
export const SiteCardData: FC<SiteCardDataProps> = ({ children, name, tips }) => {
  return (
    <div className="pl-3 py-3 site-data">
      <h2 className="mb-0 font-weight-bold site-name">
        {name}
        {tips || null}
      </h2>
      <div className="mt-3 d-flex align-items-center site-info">{children}</div>
    </div>
  );
};
