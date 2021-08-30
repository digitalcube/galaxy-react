import React, { FC, ReactNode } from 'react';
import { PropsWithChildren } from 'react';
import { FaWordpressSimple } from 'react-icons/fa';
import { Button } from '../Buttons/Button';
import { Link } from '../../routings/Link/Link';

export type SiteCardSettingsProps = PropsWithChildren<{
  wordpressAdminURL?: string;
  href?: string;
  statusBadge?: ReactNode;
  buttonText?: ReactNode;
}>;

export const SiteCardSettings: FC<SiteCardSettingsProps> = ({
  children,
  wordpressAdminURL,
  href,
  statusBadge,
  buttonText = 'Manage Site',
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
        <Button
          tag={Link}
          className="py-2 font-weight-bold"
          href={href}
          bordered
          outline
          size="small"
          style={{ height: 'auto' }}
        >
          {buttonText}
        </Button>
      </div>
      {children}
    </div>
  );
};
