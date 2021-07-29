import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';
import { SiteCard } from '../SiteCard';

export type SiteCardLoadingProps = {
  show?: boolean;
  className?: string;
};

export const SiteCardLoading: FC<SiteCardLoadingProps> = ({
  show = true,
  className,
}) => {
  if (!show) return null;

  return (
    <SiteCard className={className}>
      <div className="p-3">
        <ContentLoader height={80} speed={2}>
          <rect x="90" y="5" rx="4" ry="4" width="200" height="10" />
          <rect x="90" y="25" rx="3" ry="3" width="250" height="10" />
          <rect x="90" y="45" rx="3" ry="3" width="150" height="10" />
          <circle cx="40" cy="40" r="40" />
        </ContentLoader>
      </div>
    </SiteCard>
  );
};
