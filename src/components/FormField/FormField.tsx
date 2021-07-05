import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import {
  FormGroup,
  InputGroup,
  Label,
  Input,
  InputGroupAddon,
  InputProps,
} from 'reactstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputType } from 'reactstrap/es/Input';

export type FormFieldProps = {
  id: string;
  label: string;
  icon?: ReactNode;
  type: InputType;
  value: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  inputOptions?: Omit<
    InputProps,
    'onChange' | 'type' | 'value' | 'id' | 'required' | 'readOnly' | 'disabled'
  >;
};

export const FormField: FC<FormFieldProps> = ({
  id,
  label,
  value,
  type,
  onChange,
  inputOptions,
  icon,
  required,
  readOnly,
  disabled,
  errorMessage,
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleInputPasswordType = useCallback(() => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }, [inputType, setInputType]);

  useEffect(() => {
    setInputType(type);
  }, [type, setInputType]);
  const inputClassName = [
    inputOptions?.className,
    !!errorMessage ? 'is-invalid' : '',
  ]
    .filter(Boolean)
    .join(' ');
  const inputProps: InputProps = {
    type: inputType,
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
    <FormGroup className="mb-4">
      <Label className="font-weight-bold" htmlFor={id}>
        {label}
      </Label>
      <InputGroup className="reverse-icon">
        <Input {...inputProps} />
        {errorMessage ? (
          <div className="invalid-feedback">{errorMessage}</div>
        ) : null}
        {icon ? (
          <InputGroupAddon addonType="append">
            <i aria-hidden="true">{icon}</i>
          </InputGroupAddon>
        ) : null}
        {type === 'password' ? (
          <div
            className={`input-group-eye ${
              inputType === 'password' ? 'password-lock' : null
            }`}
            onClick={toggleInputPasswordType}
          >
            <i className="lock" aria-hidden="true">
              <FaEyeSlash className="d-block" />
            </i>
            <i className="unlock" aria-hidden="true">
              <FaEye className="d-block" />
            </i>
          </div>
        ) : null}
      </InputGroup>
    </FormGroup>
  );
};
