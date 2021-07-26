import React, { FC } from 'react';
import Image from './no-members.svg';
import { ImageProps } from './interfaces';

export const ImageNoMembers: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} alt="no member" />;
};
