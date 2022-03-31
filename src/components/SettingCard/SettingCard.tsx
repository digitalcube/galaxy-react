import React, { FC, PropsWithChildren } from 'react';
import { SettingCardDescription } from './SettingCardDescription';
import { SettingCardTitle } from './SettingCardTitle';

export type SettingCardProps = PropsWithChildren<{
  title?: string;
  description?: string;
  className?: string;
}>;
export const SettingCard: FC<SettingCardProps> = ({
  title,
  children,
  description,
  className,
}) => {
  return (
    <div
      className={['mt-3 px-3 py-4 rounded setting-card bg-white', className]
        .filter(Boolean)
        .join(' ')}
    >
      {title ? <SettingCardTitle>{title}</SettingCardTitle> : null}
      {description ? (
        <SettingCardDescription>{description}</SettingCardDescription>
      ) : null}
      {children}
    </div>
  );
};
