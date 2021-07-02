import React , {FC, PropsWithChildren} from 'react'
import { NavItem, NavLink as ReactstrapNavLink } from 'reactstrap'


export type NavLinkItemProps = PropsWithChildren<{
    active?: boolean;
}>
export const NavLinkItem: FC<NavLinkItemProps> = ({active, children}) => {
    return (
        <NavItem active={active}>
            <ReactstrapNavLink className="rounded font-weight-bold">
                {children}
            </ReactstrapNavLink>
        </NavItem>
    );
}