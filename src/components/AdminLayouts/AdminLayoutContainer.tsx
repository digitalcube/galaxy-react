import React,{FC, PropsWithChildren} from "react";

export type AdminLayoutContainerProps = PropsWithChildren<{
    column?: boolean;
    className?: string;
}>

export const AdminLayoutContainer: FC<AdminLayoutContainerProps> = ({children, column, className}) => {
    if (column) {
        return (
            <div className={`d-flex flex-md-row-reverse flex-column flex-grow-1 shifter-dashboard-columns ${className}`}>
                {children}
            </div>
        )
    }
    return (
        <main className={`px-4 mx-auto w-100 ${className}`}>
            {children}
        </main>
    )
}