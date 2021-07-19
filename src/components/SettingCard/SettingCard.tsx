import React, { FC, PropsWithChildren } from "react";
import { SettingCardDescription } from "./SettingCardDescription";
import { SettingCardTitle } from "./SettingCardTitle";

export type SettingCardProps = PropsWithChildren<{
    title?: string;
    description?: string;
}>
export const SettingCard: FC<SettingCardProps> = ({
    title, children, description,
}) => {
    return (
		<div className="mt-3 px-3 py-3 rounded setting-card">
            {title ? <SettingCardTitle>{title}</SettingCardTitle> :null}
            {description ? <SettingCardDescription>{description}</SettingCardDescription>:null}
            {children}
        </div>
    )
}