import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Link } from '../../../routings/Link/Link';

export type AuthFormHeaderProps = PropsWithChildren<{
  logo: ReactNode;
  title: string;
  link?: string;
  linkText?: string;
  variant: 'login' | 'signup';
}>;
export const AuthFormHeader: FC<AuthFormHeaderProps> = ({
  logo,
  title,
  link,
  linkText,
  variant,
  children,
}) => (
  <div className={`mb-4 pb-2 ${variant}-header`}>
    <div className={`mb-4 text-center ${variant}-icon`}>{logo}</div>
    <h1 className={`mb-0 font-weight-bold text-center ${variant}-title`}>
      {title}
    </h1>
    {link ? (
      <div
        className={`mt-2 font-weight-bold text-center ${variant}-switch-way`}
      >
        or <Link href={link}>{linkText}</Link>
      </div>
    ) : null}
    {children}
  </div>
);
