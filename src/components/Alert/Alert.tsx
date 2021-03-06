import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { CSSProperties } from 'react';
import { useMemo } from 'react';
import { FaExclamationTriangle, FaExclamationCircle } from 'react-icons/fa';
import { Alert as RSAlert, AlertProps as RSAlertProps } from 'reactstrap';

export type AlertType = 'info' | 'warning' | 'success' | 'danger';
export type AlertProps = PropsWithChildren<{
  type: AlertType;
  showIcon?: boolean;
  icon?: ReactNode;
  title?: ReactNode;
  className?: string;
  style?: CSSProperties;
}> &
  Omit<RSAlertProps, 'color' | 'className'>;

const AlertIcon: FC<Pick<AlertProps, 'type' | 'icon'>> = ({ type, icon }) => {
  if (icon) return <>{icon}</>;
  switch (type) {
    case 'warning':
      return <FaExclamationTriangle className="d-block" />;
    case 'danger':
    case 'success':
    case 'info':
    default:
      return <FaExclamationCircle className="d-block" />;
  }
};

export const Alert: FC<AlertProps> = ({
  children,
  type = 'info',
  icon,
  showIcon = true,
  title,
  className,
  style,
  ...alertProps
}) => {
  const classNames = useMemo(() => {
    const items = [`mb-4 p-0 border-0 d-flex c-alert`, className];
    return items.filter(Boolean);
  }, [className]);

  if (!title && !children) return null;
  return (
    <RSAlert
      {...alertProps}
      color={type}
      className={classNames.join(' ')}
      style={style}
    >
      {showIcon ? (
        <div className="alert-icon px-1 d-flex align-items-center">
          <i aria-hidden="true">
            <AlertIcon type={type} icon={icon} />
          </i>
        </div>
      ) : null}
      <div className="alert-body px-3 py-2 flex-grow-1">
        {title ? <h4 className="alert-heading">{title}</h4> : null}
        {typeof children === 'string' ? (
          <p className="mb-0">{children}</p>
        ) : (
          children
        )}
      </div>
    </RSAlert>
  );
};
