import React, { FC, useContext, createContext } from 'react';

export type ModalContextProps = {
  open: boolean;
  isOpen: (flag: boolean, force?: boolean) => void;
  dismiss: boolean;
};
export const ModalContext = createContext<ModalContextProps>({
  open: false,
  isOpen: () => undefined,
  dismiss: true,
});
export const useModal = () => useContext(ModalContext);

export const MockModalProvider: FC<Partial<ModalContextProps>> = ({
  children,
  ...contextProps
}) => (
  <ModalContext.Provider
    value={{
      dismiss: true,
      open: true,
      isOpen: () => undefined,
      ...contextProps,
    }}
  >
    {children}
  </ModalContext.Provider>
);
