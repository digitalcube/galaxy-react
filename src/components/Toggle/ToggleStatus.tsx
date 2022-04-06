import React, { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';

export type ToggleStatusProps = PropsWithChildren<{
  className?: string;
}>;

export const ToggleStatus: FC<ToggleStatusProps> = ({
  className,
  children,
}) => {
  const classNames = useMemo(() => {
    return ['toggle-status-box', className].filter(Boolean);
  }, [className]);
  return <div className={classNames.join(' ')}>{children}</div>;
};
