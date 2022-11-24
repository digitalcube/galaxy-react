import React, { FC, PropsWithChildren } from 'react';
import { useModal } from './ModalContext';

export type ModalHeaderProps = PropsWithChildren<{
  closeIcon?: boolean;
  noPadding?: boolean;
}>;

export const ModalHeader: FC<ModalHeaderProps> = ({
  children,
  noPadding = false,
  closeIcon = false,
}) => {
  const { isOpen, dismiss } = useModal();
  return (
    <div
      className={`modal-header border-bottom-0 justify-content-center pb-0${
        noPadding ? '' : ' px-4 pt-4'
      }`}
    >
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
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
          >
            <path d="M25 22.5L14.8 12.4l10.1-9.9L22.7.4l-10 10L2.2 0 .1 2.1l10.5 10.3L0 22.9 2.1 25l10.6-10.5 10.2 10.1z" />
          </svg>
        </button>
      ) : null}
    </div>
  );
};
