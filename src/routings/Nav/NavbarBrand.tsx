import React , {FC} from 'react'
import { NavbarBrand as ReactstrapNavbarBrand } from 'reactstrap'
import { BrandName, Logo } from '../../components'
import { useLinkTag } from '../../providers'


export type NavbarBrandProps = {
    name: BrandName;
    width?: number;
    href?: string;
}

export const NavbarBrand: FC<NavbarBrandProps> = ({name, width = 24, href = '/'}) => {
    const { tag } = useLinkTag()
    return (
        <ReactstrapNavbarBrand tag={tag} href={href}>
            <Logo name={name} width={width} />
        </ReactstrapNavbarBrand>
    )
}