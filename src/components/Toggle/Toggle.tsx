import React, { FC } from 'react';

export type ToggleProps = {
  checked: boolean;
  id: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'onChange' | 'type' | 'value' | 'checked' | 'className' | 'id'
>;

export const Toggle: FC<ToggleProps> = ({
  checked,
  onChange,
  id,
  label,
  ...inputProps
}) => {
  return (
    <div className="custom-control custom-switch c-toggle-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        checked={checked}
        onChange={onChange}
        {...inputProps}
      />
      <label className="custom-control-label" htmlFor={id}>
        <span className="d-none">{label}</span>
      </label>
    </div>
  );
};
