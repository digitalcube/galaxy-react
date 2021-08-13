import React, { FC } from 'react';
import { StatusLabelName } from '../../interfaces';
import { StatusBadge } from './StatusBadge';

export type DomainStatusBadgeProps = {
  status?: StatusLabelName | '';
  className?: string;
};

/**
 * @deprecated
 */
export const DomainStatusBadge: FC<DomainStatusBadgeProps> = ({
  status,
  className,
}) => {
  return (
    <div className="ml-4 site-status">
      <StatusBadge status={status} className={className} />
    </div>
  );
};
