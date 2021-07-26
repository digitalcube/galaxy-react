import React, { FC } from 'react';
import Image from './plan-free.svg';
import { ImageProps } from './interfaces';

export const ImagePlanFree: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} alt="plan free icon" />;
};
