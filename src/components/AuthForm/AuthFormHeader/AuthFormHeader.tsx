import React, { FC, ReactNode } from "react";

export type AuthFormHeaderProps = {
    logo: ReactNode;
    title: string;
    link: string;
    linkText: string;
    variant: 'login' | 'signup'
}
export const AuthFormHeader:FC<AuthFormHeaderProps> = ({logo, title, link, linkText, variant}) => (
        <div className={`mb-4 pb-2 ${variant}-header`}>
            <div className={`mb-4 text-center ${variant}-icon`}>
                {logo}
            </div>
            <h1 className={`mb-0 font-weight-bold text-center ${variant}-title`}>{title}</h1>
            <div className={`mt-2 font-weight-bold text-center ${variant}-switch-way`}>or <a href={link}>{linkText}</a></div>
        </div>
    )
