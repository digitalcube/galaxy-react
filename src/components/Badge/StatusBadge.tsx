import React, { FC, PropsWithChildren } from 'react';
import { memo } from 'react';
import { useMemo } from 'react';
import { StatusLabelName } from '../../interfaces';

export type StatusBadgeProps = PropsWithChildren<{
  id?: string;
  status?: StatusLabelName | '';
  className?: string;
  labelPrefix?: string;
  labelSuffix?: string;
}>;
export const StatusBadge: FC<StatusBadgeProps> = memo(
  ({ id, status, className, labelPrefix, labelSuffix, children }) => {
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
				case 'Verification Pending':
					return 'c-verification-pending';
				case 'Timed Out':
					return 'c-timed-out';
				case 'Update Needed':
					return 'c-update-needed';
        default:
          return `c-${status}`;
      }
    }, [status]);
    const classNames = [
      'rounded font-weight-bold c-site-status',
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
      <div id={id} className={classNames.join(' ')}>
        {children || label}
      </div>
    );
  }
);
