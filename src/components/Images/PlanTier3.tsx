import React, { FC } from 'react';
import Image from './plan-tier3.svg';
import { ImageProps } from './interfaces';

export const ImagePlanTier3: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} alt="plan tier3 icon" />;
};
