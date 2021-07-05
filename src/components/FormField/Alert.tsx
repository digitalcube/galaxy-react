import React, { FC, PropsWithChildren } from "react";
import { FaExclamationCircle } from "react-icons/fa";


export type FormAlertProps = PropsWithChildren<{
    errorMessage?: string;
}>
export const FormAlert: FC<FormAlertProps> = ({errorMessage, children}) => {
    if (!errorMessage && !children) return null;
    return (
        <div className="alert alert-danger mb-4 p-0 border-0 d-flex c-alert" role="alert">
            <div className="alert-icon px-1 d-flex align-items-center">
                <i aria-hidden="true">
                    <FaExclamationCircle className="d-block" />
                </i>
            </div>
            <div className="alert-body px-3 py-2 flex-grow-1">
                <p className="mb-0">{errorMessage}</p>
                {children}
            </div>
        </div>
    )
}