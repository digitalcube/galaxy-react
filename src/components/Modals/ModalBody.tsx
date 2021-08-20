import React, { FC, PropsWithChildren } from 'react';

export type ModalBodyProps = PropsWithChildren<{
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  noPadding?: boolean;
}>;

export const ModalBody: FC<ModalBodyProps> = ({ children, onSubmit, noPadding  = false }) => {
  const className = `modal-body${noPadding ? 'px-0': ' px-4 py-4'}`;
  if (onSubmit) {
    return (
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    );
  }
  return <div className={className}>{children}</div>;
};
