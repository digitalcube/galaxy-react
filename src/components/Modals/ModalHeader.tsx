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
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="3.97315"
              height="18.5414"
              transform="matrix(0.710644 -0.703551 0.710644 0.703551 0.500183 2.79541)"
              fill="white"
            />
            <rect
              width="3.97316"
              height="18.5414"
              transform="matrix(-0.710644 -0.703551 0.710644 -0.703552 3.32355 16)"
              fill="white"
            />
          </svg>
        </button>
      ) : null}
    </div>
  );
};
