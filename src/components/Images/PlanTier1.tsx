import React, { FC } from 'react';
import Image from './plan-tier1.svg';
import { ImageProps } from './interfaces';

export const ImagePlanTier1: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} />;
};
