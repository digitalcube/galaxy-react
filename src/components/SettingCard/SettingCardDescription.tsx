import React, { FC } from 'react';

export const SettingCardDescription: FC<{
  className?: string;
}> = ({ children, className }) => {
  return (
    <p
      className={`mb-0 pt-2 setting-card-description${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </p>
  );
};
