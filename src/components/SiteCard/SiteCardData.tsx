import React, { FC, ReactNode } from 'react';
import { PropsWithChildren } from 'react';
import { Link } from '../../routings/Link/Link';

export type SiteCardDataProps = PropsWithChildren<{
  name: string;
  tips?: ReactNode;
  href?: string;
}>;
export const SiteCardData: FC<SiteCardDataProps> = ({
  children,
  name,
  tips,
  href,
}) => {
  return (
    <div className="pl-3 py-3 site-data">
      <h2 className="mb-0 font-weight-bold site-name">
        <Link href={`${href}`}>{name}</Link>
        {tips || null}
      </h2>
      <div className="mt-2 d-flex align-items-center site-info">{children}</div>
    </div>
  );
};
