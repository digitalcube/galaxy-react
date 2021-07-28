import React, { FC } from 'react';
import { useMemo } from 'react';
import { StatusLabelName } from '../../interfaces';

export type StatusBadgeProps = {
  status?: StatusLabelName | '';
  className?: string;
  labelPrefix?: string;
  labelSuffix?: string;
};
export const StatusBadge: FC<StatusBadgeProps> = ({
  status,
  className,
  labelPrefix,
  labelSuffix,
}) => {
  const statusClassName = useMemo(() => {
    switch (status) {
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
        return 'c-is-pending'
      case 'inprogress':
        return 'c-is-site-starting'
      case 'building':
      case 'published':
      case 'onteam':
      case 'scheduled':
      case 'ready':
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
  return <div className={classNames.join(' ')}>{label}</div>;
};
