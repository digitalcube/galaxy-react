import React, { FC } from 'react';
import Image from './shifter-full.svg';
import { ImageProps } from './../interfaces';

export const ImageShifterLogoFull: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} alt="shifter" />;
};
