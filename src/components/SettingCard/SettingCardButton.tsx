import React, { FC, PropsWithChildren } from 'react';

export type SettingCardButtonsProps = PropsWithChildren<{
  className?: string;
  display?: 'block' | 'inline-block' | 'flex';
  /**
   * If use the props, the component's display attributes must be "flex"
   */
  justifyContent?: 'start' | 'center' | 'end';
}>;
export const SettingCardButtons: FC<SettingCardButtonsProps> = ({
  children,
  className,
  display,
  justifyContent,
}) => {
  const classNames = [className];
  if (Array.isArray(children)) {
    classNames.push('setting-card-buttons');
  } else {
    classNames.push('setting-card-button');
  }
  if (display || justifyContent) {
    if (justifyContent) {
      classNames.push('d-flex');
    } else {
      classNames.push(`d-${display}`);
    }
  }
  if (justifyContent) {
    classNames.push(`justify-content-${justifyContent}`);
  }
  return <div className={classNames.filter(Boolean).join(' ')}>{children}</div>;
};
