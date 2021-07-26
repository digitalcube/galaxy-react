import React, { FC } from 'react';
import Image from './no-deploy.svg';
import { ImageProps } from './interfaces';

export const ImageNoDeploy: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} alt="no deploy" />;
};
