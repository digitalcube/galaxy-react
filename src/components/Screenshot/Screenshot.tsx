import React, { FC } from 'react';
import { createScreenshotURL } from './Screenshot.libs';

export type ScreenshotProps = {
  url: string;
  size?: number;
} & Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  'src'
>;

export const Screenshot: FC<ScreenshotProps> = ({
  url,
  size,
  ...imageProps
}) => {
  if (!url) return null;
  const src = createScreenshotURL(url, size);
  const alt = ['website screenshot', imageProps.alt].filter(Boolean).join(' ');
  return <img {...imageProps} alt={alt} src={src} />;
};
