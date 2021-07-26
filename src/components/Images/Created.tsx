import React, { FC } from 'react';
import Image from './created.svg';
import { ImageProps } from './interfaces';

export const ImageCreated: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} alt="created" />;
};
