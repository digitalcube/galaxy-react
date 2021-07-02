import React, { FC } from 'react';
import Icon from './icon-security.svg';
import { IconProps } from './../interfaces';

export const IconSecurity: FC<IconProps> = (props) => {
  return <img {...props} src={Icon} />;
};
