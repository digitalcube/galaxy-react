import React, { FC } from 'react';
import { Spinner, SpinnerProps } from 'reactstrap';

export type LoadingProps = {
  show: boolean;
  loadingText?: string;
} & SpinnerProps;

export const Loading: FC<LoadingProps> = ({
  show,
  loadingText = 'Loading...',
  ...spinnerProps
}) => {
  if (!show) return null;

  const props: SpinnerProps = spinnerProps;
  if (props.sizes) props.sizes = 'sm';
  props.className = props.className || 'mr-2';
  return (
    <>
      <Spinner {...props}></Spinner>
      {loadingText}
    </>
  );
};
