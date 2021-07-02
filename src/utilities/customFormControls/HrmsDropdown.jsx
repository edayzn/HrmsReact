import { useField } from 'formik'
import React from 'react'
import { FormField ,Label} from 'semantic-ui-react'

export default function HrmsDropdown({...props}) {
    const [field,meta]=useField(props)
    return (
        <div>
            <FormField>
            <select {...field} {...props} >
                    <option defaultValue value="">{props.placeholder}</option>
                    {props.options.map((option) => (
                        <option key={option.value} value={option.value}>{option.text}</option>
                    ))}
                </select>
                {meta.touched && !!meta.error ? (<Label pointing basic color="red" content={meta.error}></Label>):null}
                </FormField>
        </div>
    )
}
