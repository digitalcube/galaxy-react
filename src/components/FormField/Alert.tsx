import React, { FC, PropsWithChildren } from 'react';
import { Alert } from '../Alert/Alert';

export type FormAlertProps = PropsWithChildren<{
  errorMessage?: string;
}>;
export const FormAlert: FC<FormAlertProps> = ({ errorMessage, children }) => {
  if (!errorMessage && !children) return null;
  return (
    <Alert type="danger">
      <p className="mb-0">{errorMessage}</p>
      {children}
    </Alert>
  );
};
