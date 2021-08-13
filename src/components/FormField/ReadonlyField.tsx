import React, { FC, ReactNode } from 'react';
import { useMemo } from 'react';
import { FaCopy } from 'react-icons/fa';
import { FormGroup, Input } from 'reactstrap';

export type ReadOnlyFormFieldProps = {
  value: string;
  icon: ReactNode;
  handleCopy: (value: string) => void;
  smaller?: boolean;
  className?: string;
};
export const ReadOnlyFormField: FC<ReadOnlyFormFieldProps> = ({
  value,
  icon,
  smaller,
  handleCopy,
  className: _className,
}) => {
  const className = useMemo(() => {
    const items = ['readonly'];
    if (!icon) items.push('no-icon');
    if (_className) items.push(_className);
    return items.filter(Boolean).join(' ');
  }, [_className, icon]);
  return (
    <FormGroup className={className}>
      <div className="form-group-inner position-relative">
        <Input
          type="text"
          className={`${smaller ? 'smaller ' : ''}py-0"`}
          value={value}
          readOnly
          onClick={() => handleCopy(value)}
        />
        <span className="icon position-absolute">
          <i aria-hidden="true">{icon}</i>
        </span>
        <span
          className="copy position-absolute js-copy-record"
          role="button"
          onClick={() => handleCopy(value)}
        >
          <i aria-hidden="true">
            <FaCopy className="d-block" />
          </i>
        </span>
      </div>
    </FormGroup>
  );
};
