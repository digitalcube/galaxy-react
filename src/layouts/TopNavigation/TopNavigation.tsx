import React, {FC} from 'react'
import { NavbarBrand,UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Logo } from '../../components/Logo/Logo'
import { SearchForm } from '../../components/SearchForm/SearchForm'
import { Avatar } from '../../components/Avatar/Avatar'
import { NavLinkItem, Nav } from '../../routings'

export type TopNavigationProps = {}


export const TopNavigation: FC<TopNavigationProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <NavbarBrand href="/">
                <Logo name="shifter" width={24} />
            </NavbarBrand>
            <SearchForm onChange={() => undefined} onSubmit={e => e.preventDefault()}/>
            
            <Nav>
                    <NavLinkItem active to="#">Sites</NavLinkItem>
                    <NavLinkItem to="#">Teams</NavLinkItem>
                    <NavLinkItem to="#">Guides</NavLinkItem>
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
        </nav>
    )
}