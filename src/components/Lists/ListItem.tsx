import React, { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { StatusLabel, StatusLabelProps } from '../StatusLabel/StatusLabel';

export type ListItemProps = PropsWithChildren<{
  title: string;
  status?: StatusLabelProps;
  className?: string;
  rounded?: boolean;
  alignItem?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around';
}>;
export const ListItem: FC<ListItemProps> = ({
  children,
  title,
  status,
  className,
  rounded,
  alignItem = 'center',
  justifyContent = 'between',
}) => {
  const classNames = useMemo(() => {
    const items = ['notification', 'd-flex', className];
    if (rounded) items.push('rounded');
    if (alignItem) items.push(`align-items-${alignItem}`);
    if (justifyContent) items.push(`justify-content-${justifyContent}`);
    return items.filter(Boolean);
  }, [className, rounded, alignItem, justifyContent]);
  return (
    <div className={classNames.join(' ')}>
      <div className="notification-status">
        {title} <StatusLabel {...status} />
      </div>
      {children}
    </div>
  );
};
