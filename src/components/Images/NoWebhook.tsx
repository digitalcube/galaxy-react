import React , {FC} from 'react'
import Image from './no-webhook.svg'
import { ImageProps } from './interfaces'

export const ImageNoWebhook: FC<ImageProps> = (props) => {
    return (
        <img {...props} src={Image} />
    )
}