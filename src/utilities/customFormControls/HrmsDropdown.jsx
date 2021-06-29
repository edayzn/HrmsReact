import { useField } from 'formik'
import React from 'react'
import { Dropdown, FormField ,Label} from 'semantic-ui-react'

export default function HrmsDropdown({...props}) {
    const [field,meta]=useField(props)
    return (
        <div>
            <FormField>
                <Dropdown {...field} {...props}/>
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ):null}
            </FormField>
        </div>
    )
}
