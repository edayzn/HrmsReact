import React from 'react'
import CoverLetterService from '../../services/coverLetterService'
import { Formik, Form } from 'formik'
import {  Button } from 'semantic-ui-react'
import * as Yub from 'yup'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'

export default function CoverLetterAdd() {

    let coverlettereService = new CoverLetterService();
    const initialValues = {
        user_id: 0,
        coverLetter: "",
    }
    const coverLetterSchema = Yub.object({
        user_id: Yub.number().required("Zorunlu alan"),
        coverLetter: Yub.string().required("Zoruunlu alan")
    })
    
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={coverLetterSchema}
                onSubmit={(values) => {
                    let coverLetter = {
                        jobSeeker: { user_id: values.user_id },
                        coverLetter: values.coverLetter
                    }
                    coverlettereService.add(coverLetter).then((result) => console.log(result.data.message));

                }}
            >
                <Form className="ui form" onSubmit={Formik.handleSubmit}>
                    <HrmsTextInput type="number" name="user_id" planceholder="Kullanıcı bilgisi" onChange={Formik.handleChange} value={Formik.user_id}></HrmsTextInput>
                    <HrmsTextInput type="text" name="coverLetter" planceholder="Ön yazı" onChange={Formik.handleChange} value={Formik.coverLetter}></HrmsTextInput>
                    <Button color="brown" type="submit">Ekle</Button>
                </Form>
            </Formik>

        </div>
        
    )
}
