import React, { FC } from 'react';
import Image from './plan-tier2.svg';
import { ImageProps } from './interfaces';

export const ImagePlanTier2: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} />;
};
