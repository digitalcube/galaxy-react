import React , {FC, PropsWithChildren} from 'react'


export type AdminLayoutMainProps = PropsWithChildren<{
    className?: string;
}>

export const AdminLayoutMain: FC<AdminLayoutMainProps> =({children, className}) => {
    return (
        <main
          role="main"
          className={`mb-4 pt-3 px-4 flex-grow-1 shifter-dashboard-main${className ? ` ${className}`: ''}`}
        >
            {children}
        </main>
    )
}