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
  className?: string;
  links?: Array<FooterLink>;
}>;
export const Footer: FC<FooterProps> = ({
  serviceName,
  className = 'justify-content-around align-items-center',
  children = <div />,
  links,
}) => (
  <footer className={`common-footer d-flex ${className}`}>
    {links ? (
      <ul className="d-flex">
        {links.map((link) => (
          <li key={link.id} className="mr-2">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    ) : (
      <>{Array.isArray(children) ? children[0] : <div className="d-flex" />}</>
    )}
    <Copyright serviceName={serviceName} />
    {Array.isArray(children) ? children.filter((_d, i) => i !== 0) : children}
  </footer>
);
