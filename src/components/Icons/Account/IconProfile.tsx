import React , {FC} from 'react'
import Icon from './icon-profile.svg'
import { IconProps } from './../interfaces'

export const IconProfile: FC<IconProps> = (props) => {
    return (
        <img {...props} src={Icon} />
    )
}