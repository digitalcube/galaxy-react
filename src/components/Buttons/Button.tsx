import React, { FC } from 'react';
import { useMemo } from 'react';
import {
  Button as ReactstrapButton,
  ButtonProps as ReactstrapButtonProps,
  Spinner,
} from 'reactstrap';

export type ButtonProps = Omit<ReactstrapButtonProps, 'size'> & {
  fontWeight?: 'bold' | 'normal' | 'light';
  textAlign?: 'left' | 'center' | 'right';
  rounded?: boolean;
  smaller?: boolean;
  caution?: boolean;
  outline?: boolean;
  bordered?: boolean;
  loading?: boolean;
};

export const Button: FC<ButtonProps> = ({
  fontWeight,
  rounded,
  textAlign,
  smaller,
  caution,
  outline,
  bordered,
  children,
  loading,
  disable,
  color,
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
    if (bordered) {
      classNames.push('btn-bordered');
    }
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
  /**
   * By default, will the button as a primary
   */
  const btnColor = useMemo(() => {
    if (color) return color;
    if (caution) return 'danger';
    return 'primary';
  }, [caution, color]);

  const className = classNames.filter(Boolean).join(' ');

  const buttonProps: ReactstrapButtonProps = {
    ...props,
    className,
    outline,
    color: btnColor,
  };

  if (disable || loading) {
    buttonProps.disabled = true;
  }

  return (
    <ReactstrapButton {...buttonProps}>
      {loading ? <Spinner size="sm mr-2" /> : null}
      {children}
    </ReactstrapButton>
  );
};
