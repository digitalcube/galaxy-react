import React, { FC } from 'react';
import Icon from './domain-added.svg';
import { IconProps } from './../interfaces';

export const IconDomainAdded: FC<IconProps> = (props) => {
  return <img {...props} src={Icon} alt="icon domain added" />;
};
