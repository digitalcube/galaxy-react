import React, { FC } from 'react';
import { useMemo } from 'react';

export type StatusLabelProps = {
  isActive?: boolean;
  activeLabel?: string;
  inactiveLabel?: string;
  className?: string;
  fontWeight?: 'bold' | 'normal' | 'light';
};
export const StatusLabel: FC<StatusLabelProps> = ({
  className,
  isActive,
  fontWeight,
  activeLabel = 'on',
  inactiveLabel = 'off',
}) => {
  const classNames = useMemo(() => {
    return [
      'c-toggle-switch-status',
      isActive ? 'active' : 'inactive',
      `font-weight-${fontWeight}`,
      className,
    ].filter(Boolean);
  }, [className, isActive, fontWeight]);
  if (isActive === undefined) return null;
  return (
    <span className={classNames.join(' ')}>
      {isActive ? activeLabel : inactiveLabel}
    </span>
  );
};
