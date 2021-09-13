import React, { FC } from 'react';
import { Screenshot } from '../Screenshot/Screenshot';
import { Link } from '../../routings/Link/Link';

export type SiteCardThumbnailProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & { href?: string };

const SiteThumbnail: FC<SiteCardThumbnailProps> = ({ src, ...imageProps }) => {
  if (!src) return null;
  if (/(png|jpg|jpeg|svg)$/.test(src)) {
    return (
      <img
        src={src}
        {...imageProps}
        width="167"
        height="111"
        alt="site thumbnail"
      />
    );
  }
  return <Screenshot url={src} {...imageProps} width="167" height="111" />;
};

export const SiteCardThumbnail: FC<SiteCardThumbnailProps> = ({
  src,
  href,
  ...imageProps
}) => {
  if (!src) return null;
  return (
    <div className="site-thumbnail rounded-left">
      {href ? (
        <Link href={`${href}`}>
          <SiteThumbnail src={src} {...imageProps} />
        </Link>
      ) : (
        <SiteThumbnail src={src} {...imageProps} />
      )}
    </div>
  );
};
