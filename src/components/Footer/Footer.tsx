import React , {FC, PropsWithChildren} from 'react'
import { Copyright } from '../Copyright/Copyright'

export type FooterProps = PropsWithChildren<{
    serviceName: string;
}>
export const Footer: FC<FooterProps> = ({serviceName, children}) => (
	<footer className="text-center">
        {children}
        <Copyright serviceName={serviceName} />
    </footer>
)