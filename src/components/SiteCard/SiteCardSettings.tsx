import React, { FC, ReactNode } from 'react';
import { PropsWithChildren } from 'react';
import { FaWordpressSimple } from 'react-icons/fa';
import { Link } from '../../routings/Link/Link';

export type SiteCardSettingsProps = PropsWithChildren<{
  wordpressAdminURL?: string;
  href?: string;
  statusBadge?: ReactNode;
}>;

export const SiteCardSettings: FC<SiteCardSettingsProps> = ({
  children,
  wordpressAdminURL,
  href,
  statusBadge,
}) => {
  return (
    <div className="ml-auto pt-4 pr-3 d-flex align-items-center flex-shrink-0 site-setting">
      {statusBadge}
      {wordpressAdminURL ? (
        <div className="ml-4 site-panel">
          <Link href={wordpressAdminURL}>
            <i aria-hidden="true">
              <FaWordpressSimple className="d-block" />
            </i>
          </Link>
        </div>
      ) : null}
      <div className="ml-4 font-weight-bold site-manage">
        <Link href={href}>Manage site</Link>
      </div>
      {children}
    </div>
  );
};
