import React, { FC, useMemo } from 'react';
import { Screenshot } from '../Screenshot/Screenshot';
import { Link } from '../../routings/Link/Link';
import {
  DEFAULT_THUMBNAIL_WIDTH,
  getThumbnailHeight,
} from '../../libs/image/thumbnailSize';

export type SiteCardThumbnailProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  'height'
> & { href?: string };

const SiteThumbnail: FC<SiteCardThumbnailProps> = ({ src, ...imageProps }) => {
  const widthProps = imageProps.width || DEFAULT_THUMBNAIL_WIDTH;
  const { width, height } = useMemo(() => {
    return {
      width: String(widthProps),
      height: String(getThumbnailHeight(Number(widthProps))),
    };
  }, [widthProps]);
  if (!src) return null;
  if (/(png|jpg|jpeg|svg)$/.test(src)) {
    return (
      <img
        src={src}
        width={width}
        height={height}
        alt="site thumbnail"
        {...imageProps}
      />
    );
  }
  return <Screenshot url={src} width={width} height={height} {...imageProps} />;
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
