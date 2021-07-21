import React, { FC } from 'react';
import {
  Button as ReactstrapButton,
  ButtonProps as ReactstrapButtonProps,
} from 'reactstrap';

export type ButtonProps = Omit<ReactstrapButtonProps, 'size'> & {
  fontWeight?: 'bold' | 'normal' | 'light';
  textAlign?: 'left' | 'center' | 'right';
  rounded?: boolean;
  smaller?: boolean;
  caution?: boolean;
  outline?: boolean;
  bordered?: boolean;
};

export const Button: FC<ButtonProps> = ({
  fontWeight,
  rounded,
  textAlign,
  smaller,
  caution,
  outline,
  bordered,
  ...props
}) => {
  const classNames = [props.className];
  if (outline) {
    if (bordered) {
      classNames.push('btn-bordered');
    } else {
      classNames.push('border-0');
    }
  } else {
    classNames.push('btn-colored');
  }
  if (fontWeight) {
    classNames.push(`font-weight-${fontWeight}`);
  }
  if (textAlign) {
    classNames.push(`text-${textAlign}`);
  }
  if (rounded === true) {
    classNames.push('rounded');
  }
  if (smaller) {
    classNames.push('btn-smaller');
  }
  if (caution) {
    classNames.push('btn-caution');
  }

  const className = classNames.filter(Boolean).join(' ');

  const buttonProps: ReactstrapButtonProps = {
    ...props,
    className,
    outline
  }

  if (props.disable) {
    buttonProps.disabled = true
  }

  return (
    <ReactstrapButton {...buttonProps} />
  );
};
