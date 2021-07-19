import React, { FC, PropsWithChildren } from "react";

export type SettingCardButtonsProps = PropsWithChildren<{
    className?: string;
}>
export const SettingCardButtons: FC<SettingCardButtonsProps> = ({
    children,
}) => {
    if (Array.isArray(children))
    return (
        <div className={`d-flex justify-content-end setting-card-buttons${children ? ` ${children}` : ''}`}>
            {children}
        </div>
    )
    return (
        <div className={`setting-card-button${children ? ` ${children}` : ''}`}>
            {children}
        </div>
    )
}