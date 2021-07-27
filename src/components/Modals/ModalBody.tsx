import React, { FC, PropsWithChildren } from 'react';

export type ModalBodyProps = PropsWithChildren<{
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}>;

export const ModalBody: FC<ModalBodyProps> = ({ children, onSubmit }) => {
  const className = 'modal-body px-4 py-4';
  if (onSubmit) {
    return (
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    );
  }
  return <div className={className}>{children}</div>;
};
