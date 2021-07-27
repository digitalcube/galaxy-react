import React, { FC, PropsWithChildren } from 'react';
import { useModal } from './ModalContext';

export type ModalButtonsProps = PropsWithChildren<{
  cancelButtonLabel?: string;
  showCancel?: boolean;
  className?: string;
}>;
export const ModalButtons: FC<ModalButtonsProps> = ({
  children,
  cancelButtonLabel = 'Cancel',
  showCancel = true,
  className,
}) => {
  const { isOpen, dismiss } = useModal();
  return (
    <div className={`mt-4 modal-buttons${className ? ` ${className}` : ''}`}>
      {children}
      {showCancel && dismiss ? (
        <button
          className="mt-3 font-weight-bold btn btn-block btn-bordered border-0"
          data-dismiss="modal"
          onClick={() => isOpen(false)}
        >
          {cancelButtonLabel}
        </button>
      ) : null}
    </div>
  );
};
