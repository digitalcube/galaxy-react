import React, { FC } from 'react';
import { useMemo } from 'react';
import { StatusLabelName } from '../../interfaces';

export type WordPressStatusBadgeProps = {
  status?: StatusLabelName | '';
  className?: string;
  label?: string;
};
export const WordPressStatusBadge: FC<WordPressStatusBadgeProps> = ({
  status,
  className,
  label: propsLabel,
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
    if (propsLabel) return propsLabel;
    if (!status) return '';
    return `WordPress ${status.charAt(0).toUpperCase() + status.slice(1)}`;
  }, [status, propsLabel]);

  if (!status) return null;
  return (
    <div className="ml-4 site-status">
      <div className={classNames.join(' ')}>{label}</div>
    </div>
  );
};
