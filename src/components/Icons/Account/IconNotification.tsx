import React, { FC } from 'react';
import Icon from './icon-notification.svg';
import { IconProps } from './../interfaces';

export const IconNotification: FC<IconProps> = (props) => {
  return <img {...props} src={Icon} alt="icon notification" />;
};
