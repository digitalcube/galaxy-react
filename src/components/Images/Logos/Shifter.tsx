import React , {FC} from 'react'
import Image from './shifter.svg'
import { ImageProps } from './../interfaces'

export const ImageShifterLogo: FC<ImageProps> = (props) => {
    return (
        <img {...props} src={Image} />
    )
}