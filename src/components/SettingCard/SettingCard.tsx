import React, { FC, PropsWithChildren } from 'react';
import { SettingCardDescription } from './SettingCardDescription';
import { SettingCardTitle } from './SettingCardTitle';

export type SettingCardProps = PropsWithChildren<{
  title?: string;
  titleTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  description?: string;
  className?: string;
}>;
export const SettingCard: FC<SettingCardProps> = ({
  title,
  titleTag,
  children,
  description,
  className,
}) => {
  return (
    <div
      className={['mt-4 px-3 py-4 rounded setting-card bg-white', className]
        .filter(Boolean)
        .join(' ')}
    >
      {title ? (
        <SettingCardTitle titleTag={titleTag}>{title}</SettingCardTitle>
      ) : null}
      {description ? (
        <SettingCardDescription>{description}</SettingCardDescription>
      ) : null}
      {children}
    </div>
  );
};
