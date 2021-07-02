import React, {FC} from 'react'
import { FaUser, FaSignOutAlt } from 'react-icons/fa'
import { SearchForm } from '../../components/SearchForm/SearchForm'
import { NavLinkItem, Nav, NavbarBrand, NavbarDropdown, NavbarDropdownItem } from '../../routings'

export type TopNavigationProps = {}


export const TopNavigation: FC<TopNavigationProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <NavbarBrand href="/" name="shifter" />
            <SearchForm onChange={() => undefined} onSubmit={e => e.preventDefault()}/>
            <Nav>
                    <NavLinkItem active to="#">Sites</NavLinkItem>
                    <NavLinkItem to="#">Teams</NavLinkItem>
                    <NavLinkItem to="#">Guides</NavLinkItem>
                    <NavbarDropdown
                        avatar={{
                            size: 32,
                            email: "test@example.com",
                            rounded: true
                        }}
                    >
                        <NavbarDropdownItem href="#">
                            Account<FaUser />
                        </NavbarDropdownItem>
                        <NavbarDropdownItem href="#">
                            Log out <FaSignOutAlt />
                        </NavbarDropdownItem>
                    </NavbarDropdown>
                </Nav>
        </nav>
    )
}