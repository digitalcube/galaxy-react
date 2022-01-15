import React, { FC, PropsWithChildren } from 'react';

export type WordPressContainerStatusBadgeProps = {
  status?: string;
};
export const WordPressContainerStatusBadge: FC<
  WordPressContainerStatusBadgeProps
> = ({ status }) => {
  if (!status) return null;
  return (
    <div className="ml-4 site-status">
      <div className="rounded font-weight-bold c-site-status c-is-site-running">
        WordPress Running
      </div>
    </div>
  );
};

export type SiteCardProps = PropsWithChildren<{
  className?: string;
}>;
export const SiteCard: FC<SiteCardProps> = (props) => {
  const className = [
    'mb-3 rounded d-md-flex align-items-start site-list-item',
    props.className,
  ]
    .filter(Boolean)
    .join(' ');
  return <div className={className}>{props.children}</div>;
};
