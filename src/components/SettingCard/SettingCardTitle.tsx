import React, { FC } from 'react';

export const SettingCardTitle: FC = ({ children }) => {
  return (
    <h1 className="mb-0 font-weight-bold setting-card-title">{children}</h1>
  );
};
