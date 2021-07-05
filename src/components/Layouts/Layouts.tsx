import React, { FC, PropsWithChildren, ReactNode, } from "react";

export type LayoutsProps = PropsWithChildren<{
    variant: 'login' | 'signup';
    footer?: ReactNode
}>
export const Layouts: FC<LayoutsProps> = ({children, variant, footer}) => {
    const classNames = [
        "d-flex",
        "flex-column",
        "min-vh-100",
    ]
    switch(variant) {
        case 'signup':
            classNames.push("shifter-dashboard-signup")
            break;
        case 'login':
            classNames.push('shifter-dashboard-login')
            break;
        default:
            break;
    }
    const className = classNames.join(' ')
    return (
        <div className={className}>	        
            <div className="mt-4 mb-4 flex-grow-1 d-flex align-items-center justify-content-center">{children}</div>
            {footer}
        </div>
    )
}
