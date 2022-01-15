import React, { FC } from 'react';
import Gravatar from 'react-gravatar';
import { Md5 } from 'ts-md5/dist/md5';

export type AvatarProps = {
  email?: string;
  size?: number;
  className?: string;
  rounded?: boolean;
};

export const Avatar: FC<AvatarProps> = ({
  email,
  size = 32,
  className = '',
  rounded = true,
}) => {
  if (!email) {
    console.error('Missing email');
    return null;
  }
  const classNames = ['p-0', className];
  if (rounded === true) {
    classNames.push('rounded-circle');
  }
  return (
    <Gravatar
      size={size}
      email={Md5.hashStr(email)}
      className={classNames.join(' ')}
    />
  );
};
