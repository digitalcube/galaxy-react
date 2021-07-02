import React, { FC, PropsWithChildren, useState } from 'react';
import { Collapse, Nav as ReactstrapNav, NavbarToggler } from 'reactstrap';
export type NavProps = PropsWithChildren<{}>;
export const Nav: FC<NavProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} className="navbar-collapse flex-grow-0">
        <ReactstrapNav className="ml-auto navbar-nav">{children}</ReactstrapNav>
      </Collapse>
    </>
  );
};
