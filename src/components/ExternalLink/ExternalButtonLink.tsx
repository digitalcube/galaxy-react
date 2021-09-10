import React, { FC, ReactNode } from 'react';
import { Button, ButtonProps } from 'reactstrap';

export type ExternalButtonLinkProps = {
  icon?: ReactNode;
} & Omit<ButtonProps, 'tag'>;
export const ExternalButtonLink: FC<ExternalButtonLinkProps> = ({
  icon,
  children,
  role,
  color = 'primary',
  ...buttonProps
}) => {
  const className = [
    'px-3 py-0 rounded btn-bordered btn-smaller d-inline-flex align-items-center font-weight-bold',
    buttonProps.className,
  ]
    .filter(Boolean)
    .join(' ');
  const rel = [
    'noopener',
    buttonProps.rel,
    /getshifter.io/.test(buttonProps.href) ? '' : 'noreferrer',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <Button
      {...buttonProps}
      color={color}
      className={className}
      rel={rel}
      target="_blank"
      tag="a"
    >
      {children}
      {icon ? (
        <i className="pl-2 larger-icon" aria-hidden="true">
          {icon}
        </i>
      ) : null}
    </Button>
  );
};
