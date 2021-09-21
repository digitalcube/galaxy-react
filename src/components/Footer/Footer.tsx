import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Link } from '../../routings/Link/Link';
import { Copyright } from '../Copyright/Copyright';

export type FooterLink = {
  label: ReactNode;
  id: string;
  href?: string;
};
export type FooterProps = PropsWithChildren<{
  serviceName: string;
  links?: Array<FooterLink>;
}>;
export const Footer: FC<FooterProps> = ({
  serviceName,
  children = <div />,
  links,
}) => (
  <footer className="common-footer d-flex justify-content-between align-items-center">
    {links ? (
      <ul className="d-flex">
        {links.map((link) => (
          <li key={link.id} className="mr-2">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    ) : (
      <div className="d-flex" />
    )}
    <Copyright serviceName={serviceName} />
    {children}
  </footer>
);
