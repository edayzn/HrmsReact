import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import JobPostingService from '../../services/employerService'
import { Form, Header, Icon, Button } from 'semantic-ui-react'

export default function JobPostingAdd() {
    const JobPositinSchema = Yup.object({
        job_description: Yup.string(),
        salary: Yup.number(),
        numberOfPositions: Yup.number(),
        releaseDate: Yup.number(),
        applicationDeadline: Yup.number(),
        workingCondition: Yup.boolean(),
       employer_id: Yup.number(),
        city_id: Yup.number(),
        position_id: Yup.number()

    })
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            job_description: '',
            salary: '',
            numberOfPositions: '',
            releaseDate: '',
            applicationDeadline: '',
            workingCondition: '',
            employer_id: '',
            city_id: '',
            position_id: ''
        },
        JobPositinSchema,
        onSubmit: (values) => {
            let jobPostingService = new JobPostingService()
        alert(JSON.stringify(jobPostingService.EmployerJobPostingAdd(values)),null,2)
            
        }

    })
    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='plus' circular />
                <Header.Content>İş İlanı Ekle</Header.Content>
            </Header>
            <form onSubmit={handleSubmit}>
                <Form>
                    <Form.Field>
                        <input
                            type="text"
                            name="job_description"
                            placeholder="iş Açıklaması"
                            onChange={handleChange}
                            values={values.job_description}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="text"
                            name="salary"
                            placeholder="Maaş Bilgisi"
                            onChange={handleChange}
                            values={values.salary}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="text"
                            name="numberOfPositions"
                            placeholder="İş Pozisyon Adedi"
                            onChange={handleChange}
                            values={values.numberOfPositions}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="text"
                            name="releaseDate"
                            placeholder="Yayın Tarihi"
                            onChange={handleChange}
                            values={values.releaseDate}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="text"
                            name="applicationDeadline"
                            placeholder="Son Başvuru Tarihi"
                            onChange={handleChange}
                            values={values.applicationDeadline}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="text"
                            name="workingCondition"
                            placeholder="iş ilanı Durumu"
                            onChange={handleChange}
                            values={values.workingCondition}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="text"
                            name="employer_id"
                            placeholder="iş ilanı Durumu"
                            onChange={handleChange}
                            values={values.employer_id}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="text"
                            name=" city_id"
                            placeholder="iş ilanı Durumu"
                            onChange={handleChange}
                            values={values.city_id}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="text"
                            name="position_id"
                            placeholder="iş ilanı Durumu"
                            onChange={handleChange}
                            values={values.position_id}
                        />
                    </Form.Field>
                </Form>
                <Button inverted color='blue' type='submit' >İş ilanını yayınla</Button>
            </form>
        </div>
    )
}
