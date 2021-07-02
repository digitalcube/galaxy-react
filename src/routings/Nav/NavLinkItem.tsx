import React , {FC, PropsWithChildren} from 'react'
import { NavItem, NavLink as ReactstrapNavLink } from 'reactstrap'
import { useLinkTag } from '../../providers'


export type NavLinkItemProps = PropsWithChildren<{
    active?: boolean;
    to: string;
}>
export const NavLinkItem: FC<NavLinkItemProps> = ({active, children, to}) => {
    const { tag } = useLinkTag()
    return (
        <NavItem className={active ? 'active': ''}>
            <ReactstrapNavLink className="rounded font-weight-bold" tag={tag} to={to}>
                {children}
            </ReactstrapNavLink>
        </NavItem>
    );
}