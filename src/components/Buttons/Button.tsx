import React, { FC } from 'react';
import {
  Button as ReactstrapButton,
  ButtonProps as ReactstrapButtonProps,
} from 'reactstrap';

export type ButtonProps = ReactstrapButtonProps;

export const Button: FC<ButtonProps> = (props) => {
  const className = `mt-4 btn-colored font-weight-bold ${props.className}`;
  return <ReactstrapButton {...props} className={className} />;
};
