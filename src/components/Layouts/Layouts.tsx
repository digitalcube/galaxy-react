import React, { FC, PropsWithChildren, ReactNode } from 'react';

export type LayoutsProps = PropsWithChildren<{
  variant?: 'login' | 'signup' | 'admin';
  footer?: ReactNode;
}>;
export const Layouts: FC<LayoutsProps> = ({ children, variant, footer }) => {
  const classNames = ['d-flex', 'flex-column', 'min-vh-100'];
  switch (variant) {
    case 'signup':
      classNames.push('shifter-dashboard-signup');
      break;
    case 'login':
      classNames.push('shifter-dashboard-login');
      break;
    default:
      classNames.push('shifter-dashboard');
      break;
  }
  const className = classNames.join(' ');
  return (
    <div className={className}>
      {variant === 'admin' ? (
        children
      ) : (
        <div className="mt-4 mb-4 flex-grow-1 d-flex align-items-center justify-content-center">
          {variant === 'login' ? (
            <div className="mx-auto d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between login-column">
              {children}
            </div>
          ) : (
            children
          )}
        </div>
      )}
      {footer}
    </div>
  );
};
