import React from 'react'
import * as Yub from 'yup'
import { Formik, Form } from 'formik'
import {  Button } from 'semantic-ui-react'
import ComputeerSkillService from '../../services/computerSkillService'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'


export default function ComputerSkillAdd() {
    let computerSkillService = new ComputeerSkillService();
    const initialValues = {
        computerSkills: "",
        user_id: 0,
    }
    const computerSkillSchema = Yub.object({
        computerSkills: Yub.string().required("Zorunlu Alan"),
        user_id: Yub.number().required("Zorunlu Alan")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={computerSkillSchema}
                onSubmit={(values) => {
                    let computerSkill = {
                        computerSkills: values.computerSkills,
                        jobSeeker: { user_id: values.user_id }
                    }
                    computerSkillService.addComputerSkill(computerSkill).then((result) => console.log(result.data.message));
                }}
            >
                <Form className="ui form" onSubmit={Formik.handleSubmit}>
                    <HrmsTextInput type="text" name="computerSkills" planceholder="Bilgisayar bilgisi" onChange={Formik.handleChange} value={Formik.computerSkills}></HrmsTextInput>
                    <HrmsTextInput type="number" name="user_id" planceholder="Kullanıcı bilgisi" onChange={Formik.handleChange} value={Formik.user_id}></HrmsTextInput>
                    <Button color="brown" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
