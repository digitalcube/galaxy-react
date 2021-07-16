import React, { FC, PropsWithChildren, CSSProperties } from 'react';

export type NavbarProps = PropsWithChildren<{
  fixed?: boolean
}>;
export const Navbar: FC<NavbarProps> = ({ children, fixed }) => {
  const style: CSSProperties = fixed ? {
    position: 'fixed',
    zIndex: 999,
    background: '#fff',
    width: '100%',
    boxShadow: '0 1px 8px rgb(69 29 57 / 10%)',
  }: {}

  return (
    <nav className="navbar navbar-expand-lg" style={style}>{children}</nav>
  );
  }
