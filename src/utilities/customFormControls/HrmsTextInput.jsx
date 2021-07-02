import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function HrmsTextInput({ ...props }) {

    const [field, meta] = useField(props)
    console.log(props)
    return (
        <div>
            <FormField>
                <input {...field} {...props}
                    fluid="true"
                    style={{ marginRight: "1em", marginTop: "1em" }} />
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ) : null}
            </FormField>
        </div>
    )
}
