import React, { FC } from 'react';
import Image from './digitalcube.svg';
import { ImageProps } from './../interfaces';

export const ImageDigitalcubeLogo: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} />;
};
