import React, { FC } from 'react';
import Image from './login-information.svg';
import { ImageProps } from './interfaces';

export const ImageLoginInformation: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} />;
};
