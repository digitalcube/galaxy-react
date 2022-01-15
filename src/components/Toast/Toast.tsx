import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { CSSProperties } from 'react';
import { useMemo } from 'react';
import {
  FaInfo,
  FaExclamation,
  FaCheck,
  FaExclamationTriangle,
  FaExclamationCircle,
} from 'react-icons/fa';
import { Alert, AlertProps } from 'reactstrap';

export type ToastType = 'info' | 'warning' | 'success' | 'danger';
export type ToastProps = PropsWithChildren<{
  type: ToastType;
  showIcon?: boolean;
  icon?: ReactNode;
  title?: ReactNode;
  className?: string;
  style?: CSSProperties;
}> &
  Omit<AlertProps, 'color' | 'className'>;

const AlertIcon: FC<Pick<ToastProps, 'type' | 'icon'>> = ({ type, icon }) => {
  if (icon) return <>{icon}</>;
  switch (type) {
    case 'warning':
      return <FaExclamationTriangle className="d-block" />;
    case 'danger':
      return <FaExclamation className="d-block" />;
    case 'success':
      return <FaCheck className="d-block" />;
    case 'info':
      return <FaInfo className="d-block" />;
    default:
      return <FaExclamationCircle className="d-block" />;
  }
};

export const Toast: FC<ToastProps> = ({
  children,
  type = 'info',
  icon,
  showIcon = true,
  title,
  className,
  style,
  ...ToastProps
}) => {
  const classNames = useMemo(() => {
    const items = [`mb-4 border p-0 d-flex c-toast`, className];
    return items.filter(Boolean);
  }, [className]);

  if (!title && !children) return null;
  return (
    <Alert
      {...ToastProps}
      color={type}
      className={classNames.join(' ')}
      style={style}
    >
      {showIcon ? (
        <div className="toast-icon d-flex align-items-center">
          <i aria-hidden="true">
            <AlertIcon type={type} icon={icon} />
          </i>
        </div>
      ) : null}
      <div className="toast-body px-3 py-2 flex-grow-1">
        {title ? (
          <h4 className="toast-heading d-inline-block h6 mb-0">
            {title + ':'}
          </h4>
        ) : null}
        {typeof children === 'string' ? (
          <p className="mb-0  d-inline-block">{children}</p>
        ) : (
          children
        )}
      </div>
    </Alert>
  );
};
