import React, {useEffect, useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import JobPostingService from '../../services/employerService'
import CityService from '../../services/cityService'
import { Form, Button, Header, Icon, Label } from 'semantic-ui-react'
import { Select } from 'semantic-ui-react'

export default function JobPostingAdd() {
    const validationSchema = Yup.object().shape({
        job_description: Yup.string(),
        salary: Yup.number(),
        numberOfPositions: Yup.number(),
        releaseDate: Yup.date(),
        applicationDeadline: Yup.date(),
        workingCondition: Yup.boolean(),
        employer_id: Yup.number(),
        city_id: Yup.number(),
        position_id: Yup.number()

    })
    const [city, setCity] = useState([])
    useEffect(()=>{
        let cityService = new CityService();
        cityService.getCity().then(result => setCity(result.data.data))
    },[])
    
    return (

        <Formik
            initialValues={{
                job_description:'',
                salary: '',
                numberOfPositions: '',
                releaseDate: '',
                applicationDeadline: '',
                workingCondition: '',
                employer_id: '',
                city_id: 34,
                position_id: 1
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, setErrors, setFieldError, setStatus, resetForm }) => {
                let jobPostingAdd = new JobPostingService();
                jobPostingAdd.EmployerJobPostingAdd(values).then();
                console.log(values);
            }}
        >

            {({ handleSubmit, handleChange, values, handleBlur, errors }) => (

                <Form onSubmit={handleSubmit}>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='plus' circular />
                        <Header.Content>İş İlanı Ekle</Header.Content>
                    </Header>

                    <Form.Field>
                        <input
                            type="text"
                            name="job_description"
                            placeholder="iş Açıklaması"
                            onChange={handleChange}
                            value={values.job_description}
                        />

                        {
                            errors.job_description &&
                            <Label basic color='red' pointing  >
                                {errors.job_description}
                            </Label>
                        }
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="number"
                            name="salary"
                            placeholder="Maaş Bilgisi"
                            onChange={handleChange}
                            value={values.salary}
                        />
                        {
                            errors.salary &&
                            <Label basic color='red' pointing  >
                                {errors.salary}
                            </Label>
                        }
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="number"
                            name="numberOfPositions"
                            placeholder="İş Pozisyon Adedi"
                            onChange={handleChange}
                            value={values.numberOfPositions}
                        />
                        {
                            errors.numberOfPositions &&
                            <Label basic color='red' pointing  >
                                {errors.numberOfPositions}
                            </Label>
                        }
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="date"
                            name="releaseDate"
                            placeholder="Yayın Tarihi"
                            onChange={handleChange}
                            value={values.releaseDate}
                        />
                        {
                            errors.releaseDate &&
                            <Label basic color='red' pointing  >
                                {errors.releaseDate}
                            </Label>
                        }
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="date"
                            name="applicationDeadline"
                            placeholder="Son Başvuru Tarihi"
                            onChange={handleChange}
                            value={values.applicationDeadline}
                        />
                        {
                            errors.applicationDeadline &&
                            <Label basic color='red' pointing  >
                                {errors.applicationDeadline}
                            </Label>
                        }
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="text"
                            name="workingCondition"
                            placeholder="iş ilanı Durumu"
                            onChange={handleChange}
                            value={values.workingCondition}
                        />

                        {
                            errors.workingCondition &&
                            <Label basic color='red' pointing  >
                                {errors.workingCondition}
                            </Label>
                        }
                    </Form.Field>
                    <Form.Field>
                        <input
                            type="number"
                            name="employer_id"
                            placeholder="iş ilanı Durumu"
                            onChange={handleChange}
                            value={values.employer_id}
                        />

                        {
                            errors.employer_id &&
                            <Label basic color='red' pointing  >
                                {errors.employer_id}
                            </Label>
                        }

                    </Form.Field>
                   
                    <Button inverted color='blue' type='submit' >İş ilanını yayınla</Button>
                </Form>

            )}
        </Formik>


    );
}
