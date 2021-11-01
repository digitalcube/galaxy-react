import React, { FC } from 'react';
import Image from './amimoto.svg';
import { ImageProps } from './../interfaces';

export const ImageAmimotoLogo: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} alt="amimoto" />;
};
