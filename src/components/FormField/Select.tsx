import React, { FC, ReactNode } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { FormGroup, InputGroup, Label, Input, InputProps } from 'reactstrap';

export type FormSelectProps = {
  options: React.OptionHTMLAttributes<HTMLOptionElement>[];
  id: string;
  label: string;
  icon?: ReactNode;
  value: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  inputOptions?: Omit<
    InputProps,
    | 'onChange'
    | 'type'
    | 'value'
    | 'id'
    | 'required'
    | 'readOnly'
    | 'disabled'
    | 'children'
  >;
  className?: string;
};
export const FormSelect: FC<FormSelectProps> = ({
  id,
  options,
  value,
  label,
  onChange,
  required,
  readOnly,
  disabled,
  errorMessage,
  inputOptions,
  className,
}) => {
  const inputClassName = [
    inputOptions?.className,
    !!errorMessage ? 'is-invalid' : '',
  ]
    .filter(Boolean)
    .join(' ');
  const inputProps: InputProps = {
    type: 'select',
    value,
    id,
    className: inputClassName,
    placeholder: label,
    onChange,
    ...inputOptions,
  };
  if (required) inputProps.required = required;
  if (disabled) inputProps.disabled = disabled;
  if (readOnly) inputProps.readOnly = readOnly;
  return (
    <FormGroup className={`mb-4${className ? ` ${className}`: ''}`}>
      <Label className="font-weight-bold" htmlFor={id}>
        {label}
      </Label>
      <InputGroup className="position-relative select-wrapper">
        <Input {...inputProps}>
          {options.map((optionProps, i) => (
            <option key={`${id}-option-${i}`} {...optionProps} />
          ))}
        </Input>
          <i className="position-absolute" aria-hidden="true">
            <FaAngleDown className="d-block" />
          </i>
        {errorMessage ? (
          <div className="invalid-feedback">{errorMessage}</div>
        ) : null}
      </InputGroup>
    </FormGroup>
  );
};
