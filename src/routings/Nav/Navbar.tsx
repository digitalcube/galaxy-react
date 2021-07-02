import React, { FC, PropsWithChildren } from 'react';

export type NavbarProps = PropsWithChildren<{}>;
export const Navbar: FC<NavbarProps> = ({ children }) => (
  <nav className="navbar navbar-expand-lg">{children}</nav>
);
