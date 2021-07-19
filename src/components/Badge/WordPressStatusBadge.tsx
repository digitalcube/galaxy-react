import React, { FC } from 'react';
import { StatusLabelName } from '../../interfaces';
import { StatusBadge } from './StatusBadge';

export type WordPressStatusBadgeProps = {
  status?: StatusLabelName | '';
  className?: string;
};
export const WordPressStatusBadge: FC<WordPressStatusBadgeProps> = ({
  status,
  className,
}) => {
  return (
    <div className="ml-4 site-status">
      <StatusBadge
        status={status}
        className={className}
        labelPrefix="WordPress"
      />
    </div>
  );
};
