import React, { FC } from 'react';
import Icon from './icon-close.svg';
import { IconProps } from './interfaces';

export const IconClose: FC<IconProps> = (props) => {
  return <img {...props} src={Icon} alt="icon close" />;
};
