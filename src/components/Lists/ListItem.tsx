import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { useMemo } from 'react';
import { StatusLabel, StatusLabelProps } from '../StatusLabel/StatusLabel';

export type ListItemProps = PropsWithChildren<{
  title: ReactNode;
  status?: StatusLabelProps;
  className?: string;
  rounded?: boolean;
  column?: boolean;
  alignItem?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around';
  description?: ReactNode;
}>;

export const ListItemDescription: FC = ({ children }) => {
  if (!children) return null;
  return (
    <div className="mt-2 w-100">
      {typeof children === 'string' ? (
        <p className="mb-0 small">{children}</p>
      ) : (
        children
      )}
    </div>
  );
};

export const ListItem: FC<ListItemProps> = ({
  children,
  title,
  status,
  className,
  column,
  rounded,
  alignItem = 'center',
  justifyContent = 'between',
  description,
}) => {
  const classNames = useMemo(() => {
    const items = ['notification', 'd-flex', 'flex-wrap', className];
    if (column) items.push('flex-column');
    if (rounded) items.push('rounded');
    if (alignItem) items.push(`align-items-${alignItem}`);
    if (justifyContent) items.push(`justify-content-${justifyContent}`);
    return items.filter(Boolean);
  }, [className, rounded, alignItem, justifyContent, column]);
  return (
    <div className={classNames.join(' ')}>
      <div className="notification-status">
        {title} <StatusLabel {...status} />
      </div>
      {children}
      <ListItemDescription>{description}</ListItemDescription>
    </div>
  );
};
