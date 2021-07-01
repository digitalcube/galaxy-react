import React, { FC } from "react";
import { useMemo } from "react";
import { Button as ReactstrapButton, ButtonProps as ReactstrapButtonProps } from 'reactstrap'

export type ButtonProps = ReactstrapButtonProps

export const Button: FC<ButtonProps> = (props) => {
    const providedClassName = props.className
    const isBlock = props.block || false
    const className = useMemo(() => {
        const names: string[] = ['btn', 'mt-4', 'font-weight-bold']
        if (providedClassName) 
            names.push(providedClassName)
        if (isBlock)
            names.push('btn-block')

        // tmp
        names.push('btn-login')

        return names.join(' ')
    }, [providedClassName, isBlock])

    return (
        <ReactstrapButton
            {...props}
            className={className + 'btn-colored btn-smaller'}
        />
    )
}

export default Button