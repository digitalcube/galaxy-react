import React, {FC} from 'react'
import { useState } from 'react'
import { NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Logo } from '../../components/Logo/Logo'
import { SearchForm } from '../../components/SearchForm/SearchForm'
import { Avatar } from '../../components/Avatar/Avatar'

export type TopNavigationProps = {}


export const TopNavigation: FC<TopNavigationProps> = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <nav className="navbar navbar-expand-lg">
            <NavbarBrand href="/">
                <Logo name="shifter" width={24} />
            </NavbarBrand>
            <SearchForm onChange={() => undefined} onSubmit={e => e.preventDefault()}/>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} className="navbar-collapse flex-grow-0">
                <Nav className="ml-auto navbar-nav">
                    <NavItem active>
                        <NavLink className="rounded font-weight-bold">Sites</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="rounded font-weight-bold">Teams</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="rounded font-weight-bold">Guides</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav role="button" data-toggle="dropdown" className="nav-link font-weight-bold dropdown-toggle">
                            <Avatar size={32} email="test@example.com" rounded />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <a className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between" href="#">Account<i className="fas fa-user"></i></a>
                            </DropdownItem>
                            <DropdownItem>
                                <a className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between" href="#">Log Out<i className="fas fa-sign-out-alt"></i></a>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </nav>
    )
}