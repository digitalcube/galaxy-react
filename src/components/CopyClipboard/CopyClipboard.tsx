import React, { FC, useMemo } from 'react';
import { PropsWithChildren } from 'react';
import { FaCopy } from 'react-icons/fa';

export type CopyClipboardProps = PropsWithChildren<{
  className?: string;
  classNameOverwrite?: boolean;
  value: string;
  handleCopy: (value: string) => void;
  showIcon?: boolean;
}>;
export const CopyClipboard: FC<CopyClipboardProps> = ({
  showIcon = true,
  children,
  className: propsClassName,
  classNameOverwrite,
  value,
  handleCopy,
}) => {
  const className = useMemo(() => {
    if (propsClassName && classNameOverwrite) return propsClassName;
    const names = ['d-flex align-items-center'];
    if (propsClassName) names.push(propsClassName);
    return names.filter(Boolean).join(' ');
  }, [propsClassName, classNameOverwrite]);
  return (
    <span role="button" className={className} onClick={() => handleCopy(value)}>
      {children || value}
      {showIcon ? (
        <i className="ml-1" aria-hidden="true">
          <FaCopy className="d-block" />
        </i>
      ) : null}
    </span>
  );
};
