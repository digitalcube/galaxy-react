import React, { FC } from 'react';
import Image from './send-email.svg';
import { ImageProps } from './interfaces';

export const ImageSendEmail: FC<ImageProps> = (props) => {
  return <img {...props} src={Image} alt="send email" />;
};
