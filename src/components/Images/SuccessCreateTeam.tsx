import React, { FC } from 'react';
import Image from './success-create-team.svg';
import { ImageProps } from './interfaces';

export const ImageSuccessCreateTeam: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} />;
};
