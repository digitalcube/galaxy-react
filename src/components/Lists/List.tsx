import React, { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';

export type ListProps = PropsWithChildren<{
  className?: string;
  rounded?: boolean;
}>;

export const List: FC<ListProps> = ({
  className,
  rounded = false,
  children,
}) => {
  const classNames = useMemo(() => {
    return [
      'base-notification-box',
      'bg-white',
      rounded ? 'rounded' : '',
      className,
    ].filter(Boolean);
  }, [rounded, className]);
  return <div className={classNames.join(' ')}>{children}</div>;
};
