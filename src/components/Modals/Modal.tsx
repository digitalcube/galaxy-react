import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useMemo,
  useState,
  useCallback,
  CSSProperties,
} from 'react';
import { createPortal } from 'react-dom';
import { ModalBody } from './ModalBody';
import { ModalContext, useModal } from './ModalContext';
import { ModalHeader } from './ModalHeader';

export type ModalProps = PropsWithChildren<{
  id?: string;
  className?: string;
  open?: boolean;
  size?: 'normal' | 'small';
  rounded?: boolean;
  title?: ReactNode;
  dismiss?: boolean;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  setOpen?: (flag: boolean) => void;
  style?: CSSProperties;
  noPadding?: boolean;
  targetElement?: Element;
}>;

export const ModalRow: FC<
  Omit<ModalProps, 'targetElement' | 'dismiss' | 'setOpen' | 'open'>
> = ({
  id,
  className,
  children,
  size,
  rounded,
  title,
  onSubmit,
  style,
  noPadding = false,
}) => {
  const { open, isOpen: isOpenHandler, dismiss } = useModal();

  const modalClassName = useMemo(() => {
    const items = ['modal', className];
    if (open) {
      items.push('show');
      items.push('d-block');
    }
    if (size === 'small') items.push('smaller');
    return items.filter(Boolean).join(' ');
  }, [className, open, size]);
  if (!open) return null;

  return (
    <>
      <div className={open ? 'modal-open' : ''}>
        <div
          className={modalClassName}
          id={id}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modal-label"
          aria-hidden="false"
          aria-modal="true"
          onClick={() => isOpenHandler(false)}
          style={style}
        >
          <div
            className="modal-dialog"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`modal-content ${rounded ? ' rounded' : ''}`}>
              {title ? (
                <ModalHeader closeIcon={dismiss} noPadding={noPadding}>
                  {title}
                </ModalHeader>
              ) : null}
              {children ? (
                <ModalBody onSubmit={onSubmit} noPadding={noPadding}>
                  {children}
                </ModalBody>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
};

export const Modal: FC<ModalProps> = ({
  open,
  dismiss = false,
  setOpen,
  targetElement,
  ...props
}) => {
  const [_isOpen, _setIsOpen] = useState(open || false);

  const setIsOpen = setOpen || _setIsOpen;
  const isOpen = typeof open === undefined ? _isOpen : open;

  const isOpenHandler = useCallback(
    (flag: boolean, force?: boolean) => {
      if (!dismiss && !force) return;
      setIsOpen(flag);
    },
    [dismiss, setIsOpen]
  );
  if (!isOpen) return null;

  if (targetElement) {
    return createPortal(
      <ModalContext.Provider
        value={{
          open: isOpen,
          isOpen: isOpenHandler,
          dismiss,
        }}
      >
        <ModalRow {...props} />
      </ModalContext.Provider>,
      targetElement
    );
  }

  return (
    <ModalContext.Provider
      value={{
        open: isOpen,
        isOpen: isOpenHandler,
        dismiss,
      }}
    >
      <ModalRow {...props} />
    </ModalContext.Provider>
  );
};
