import React, { FC, PropsWithChildren } from 'react';
import { memo } from 'react';
import { useMemo } from 'react';
import { StatusLabelName } from '../../interfaces';
import { FaCircle } from 'react-icons/fa';

export type StatusBadgeOutlineProps = PropsWithChildren<{
  id?: string;
  status?: StatusLabelName | '';
  className?: string;
  labelPrefix?: string;
	labelSuffix?: string;
	withExternalLinkIcon?: boolean;
}>;
export const StatusBadgeOutline: FC<StatusBadgeOutlineProps> = memo(
  ({ id, status, className, labelPrefix, labelSuffix, withExternalLinkIcon, children }) => {
    const statusClassName = useMemo(() => {
      switch (status) {
        case 'info':
          return 'c-ready';
        case 'warning':
          return 'c-is-pending';
        case 'danger':
          return 'c-is-failed';
        case 'success':
          return 'c-is-enabled';
        case 'stopped':
        case 'running':
        case 'starting':
        case 'starting-static':
          return `c-is-site-${status}`;
        case 'attached':
        case 'deployed':
        case 'enabled':
        case 'failed':
        case 'verified':
        case 'pending':
        case 'disabled':
          return `c-is-${status}`;
        case 'loading':
          return 'c-is-pending';
        case 'updating':
        case 'provisioning':
        case 'inprogress':
          return 'c-is-site-starting';
        case 'generating':
        case 'building':
          return 'c-building';
        case 'published':
        case 'onteam':
        case 'scheduled':
        case 'ready':
        default:
          return `c-${status}`;
      }
    }, [status]);
    const classNames = [
      'rounded font-weight-bold c-site-status c-site-status-outline',
      statusClassName,
      className,
    ].filter(Boolean);
    const label = useMemo(() => {
      if (!status) return '';
      return [
        labelPrefix ? `${labelPrefix} ` : '',
        status.charAt(0).toUpperCase() + status.slice(1),
        labelSuffix ? ` ${labelSuffix}` : '',
      ].filter(Boolean);
		}, [status, labelPrefix, labelSuffix]);

    if (!status) return null;
    return (
			<div id={id} className={withExternalLinkIcon ? classNames.join(' ')+" site-status-outline-icon" : classNames.join(' ')} >
				{withExternalLinkIcon ? (
        <i className="ml-2" aria-hidden="true">
          <FaCircle />
        </i>
      ) : null}
        {children || label}
      </div>
    );
  }
);
