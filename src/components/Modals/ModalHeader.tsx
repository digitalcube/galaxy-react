import React, { FC, PropsWithChildren } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useModal } from './ModalContext';

export type ModalHeaderProps = PropsWithChildren<{
  closeIcon?: boolean;
  noPadding?: boolean;
}>;

export const ModalHeader: FC<ModalHeaderProps> = ({
  children,
  noPadding  = false,
  closeIcon = false,
}) => {
  const { isOpen, dismiss } = useModal();
  return (
    <div className={`modal-header border-bottom-0 justify-content-center pb-0${noPadding ? '': ' px-4 pt-4'}`}>
      <div className="modal-title font-weight-bold colored" id="modal-label">
        {children}
      </div>
      {closeIcon && dismiss ? (
        <button
          type="button"
          className="close m-0 p-0"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => isOpen(false)}
        >
          <i aria-hidden="true">
            <FaTimes className="d-block" />
          </i>
        </button>
      ) : null}
    </div>
  );
};
