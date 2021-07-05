import React , {FC} from 'react'
import { FormGroup, Input, InputProps, Label } from 'reactstrap'


export type CheckboxProps = {
    label: string;
    id: string;
} & Omit<InputProps, 'type'>
export const Checkbox: FC<CheckboxProps> = (props) => {
    return (
        <FormGroup className="form-check d-flex align-items-center colored-check smaller">
            <Input {...props} type="checkbox" id={props.id} className="screen-reader-text" checked={props.value === true} />
            <Label className="form-check-label" htmlFor={props.id}>{props.label}</Label>
        </FormGroup>
    )
}