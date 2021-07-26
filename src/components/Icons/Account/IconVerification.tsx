import React, { FC } from 'react';
import Icon from './icon-verification.svg';
import { IconProps } from './../interfaces';

export const IconVerification: FC<IconProps> = (props) => {
  return <img {...props} src={Icon} alt="icon verification" />;
};
