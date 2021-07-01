import React , {FC} from 'react'
import Icon from './icon-billing.svg'
import { IconProps } from './../interfaces'

export const IconBilling: FC<IconProps> = (props) => {
    return (
        <img {...props} src={Icon} />
    )
}