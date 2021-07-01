import React , {FC} from 'react'
import Image from './no-thumbnail.svg'
import { ImageProps } from './interfaces'

export const ImageNoThumbnail: FC<ImageProps> = (props) => {
    return (
        <img {...props} src={Image} />
    )
}