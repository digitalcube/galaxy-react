import React, { FC } from 'react';
import { Screenshot } from '../Screenshot/Screenshot';
import { Link } from '../../routings/Link/Link';

export type SiteCardThumbnailProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & { href?: string };

export const SiteCardThumbnail: FC<SiteCardThumbnailProps> = ({
  src,
  href,
  ...imageProps
}) => {
  if (!src) return null;
  return (
    <div className="site-thumbnail rounded-left">
      <Link href={`${href}`}>
        {/(png|jpg|jpeg|svg)$/.test(src) ? (
          <img
            src={src}
            {...imageProps}
            width="167"
            height="111"
            alt="site thumbnail"
          />
        ) : (
          <Screenshot url={src} {...imageProps} width="167" height="111" />
        )}
      </Link>
    </div>
  );
};
