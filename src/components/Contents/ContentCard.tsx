import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { FaBolt } from 'react-icons/fa';
import { ContentCardCategories } from './ContentCardCategories';

import { ExternalButtonLink } from '../ExternalLink/ExternalButtonLink';
export type ContentCardProps = PropsWithChildren<{
  categories?: Array<{
    name: string;
    link?: string;
  }>;
  title: string;
  href?: string;
  linkText?: string;
  linkIcon?: ReactNode;
}>;

const ContentCardExcerpt: FC<Pick<ContentCardProps, 'children'>> = ({
  children,
}) => {
  if (!children) return null;
  if (typeof children === 'string') {
    return <p className="mb-0 guide-list-excerpt">{children}</p>;
  }
  return <>{children}</>;
};

export const ContentCard: FC<ContentCardProps> = (props) => {
  return (
    <div className="pt-4 px-4 h-100 position-relative guide-list-item">
      <ContentCardCategories {...props} />
      <h3 className="mb-2 guide-list-title font-weight-bold">{props.title}</h3>
      <ContentCardExcerpt {...props} />
      <div className="position-absolute guide-list-anchor">
        <ExternalButtonLink
          icon={props.linkIcon || <FaBolt className="d-block" />}
          href={props.href}
        >
          {props.linkText}
        </ExternalButtonLink>
      </div>
    </div>
  );
};
