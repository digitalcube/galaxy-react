import React, { FC } from 'react';
import Gravatar from 'react-gravatar';

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
  const classNames = ['p-0', className];
  if (rounded === true) {
    classNames.push('rounded-circle');
  }
  return (
    <Gravatar size={size} email={email} className={classNames.join(' ')} />
  );
};
