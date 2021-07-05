import React, { FC, ReactNode } from 'react';
import { Link } from '../../routings';

export type FeaturePromotionBlockProps = {
  image: ReactNode;
  title?: string;
  description?: string;
  link?: string;
  linkText?: string;
};
export const FeaturePromotionBlock: FC<FeaturePromotionBlockProps> = ({
  image,
  title,
  description,
  link,
  linkText,
}) => {
  return (
    <div className="login-information mt-4 mt-md-0 mx-3">
      {image ? (
        <div className="login-information-icon text-center">{image}</div>
      ) : null}
      {title ? (
        <h2 className="login-information-title mb-0 font-weight-bold text-center">
          {title}
        </h2>
      ) : null}
      {description ? (
        <div className="login-information-description mt-4 text-center">
          {description}
        </div>
      ) : null}
      {link ? (
        <div className="login-information-anchor font-weight-bold text-center">
          <Link href={link}>{linkText || 'Learn More'}</Link>
        </div>
      ) : null}
    </div>
  );
};
