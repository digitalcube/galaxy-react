import React, { FC } from 'react';
import Image from './no-site-manage.svg';
import { ImageProps } from './interfaces';

export const ImageNoSiteManage: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} />;
};
