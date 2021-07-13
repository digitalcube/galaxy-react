import React, { FC } from 'react';
import { Screenshot } from '../Screenshot/Screenshot';

export type SiteCardThumbnailProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export const SiteCardThumbnail: FC<SiteCardThumbnailProps> = ({src, ...imageProps}) => {
  if (!src) return null;
  return (
    <div className="site-thumbnail rounded-left">
      {/(png|jpg|jpeg|svg)$/.test(src) ? (
      <img src={src} {...imageProps} width="167" height="111"  />
      ): (
      <Screenshot url={src} {...imageProps} width="167" height="111"  />
      )}
    </div>
  )
}
