import React, { FC } from 'react';
import Image from './no-teams.svg';
import { ImageProps } from './interfaces';

export const ImageNoTeams: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} />;
};
