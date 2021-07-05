import React, { FC, useState, useCallback } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FormGroup, Label, InputGroup, Input } from 'reactstrap';
import { InputType } from 'reactstrap/es/Input';

export type PasswordWithConfirmationProps = {
  label: string;
  id: string;
  value: string;
  confirmValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onChangeConfirm: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  confirmPlaceholder: string;
};
export const PasswordWithConfirmation: FC<PasswordWithConfirmationProps> = ({
  label,
  id,
  value,
  confirmValue,
  onChange,
  onChangeConfirm,
  placeholder,
  confirmPlaceholder,
}) => {
  const [inputType, setInputType] = useState<InputType>('password');

  const toggleInputPasswordType = useCallback(() => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }, [inputType, setInputType]);

  return (
    <FormGroup>
      <Label htmlFor={id} className="font-weight-bold">
        {label}
      </Label>
      <InputGroup className="mb-4" id="password-eye">
        <Input
          type={inputType}
          id={id}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
        />
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
      </InputGroup>
      <Input
        type="password"
        id={`${id}-reenter`}
        placeholder={confirmPlaceholder}
        value={confirmValue}
        onChange={onChangeConfirm}
      />
    </FormGroup>
  );
};
