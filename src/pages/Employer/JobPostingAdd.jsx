import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import JobPostingService from '../../services/jobPostingService'
import EmployerService from "../../services/employerService"
import CityService from '../../services/cityService'
import jobPositionService from "../../services/jobPositionService"
import WorkingTimeService from '../../services/workingTimeService'
import WorkingTpyeService from '../../services/workingTypeService'
import { Input, Button, Header, Icon, Segment, Dropdown } from 'semantic-ui-react'
import swal from 'sweetalert';

export default function JobPostingAdd() {
    let jobAdvertisementService = new JobPostingService();
    const [employers, setEmployers] = useState([]);
    const [cities, setCities] = useState([]);
    const [positions, setJobPosition] = useState([]);
    const [workingTimes, setworkingTime] = useState([]);
    const [workingTypes, setworkingTypes] = useState([])
    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployer().then((result) => setEmployers(result.data.data));

        let cityService = new CityService();
        cityService.getCity().then((result) => setCities(result.data.data));

        let positionService = new jobPositionService();
        positionService.getPosition().then((result) => setJobPosition(result.data.data));

        let workingTimeService = new WorkingTimeService();
        workingTimeService.getWorkingTime().then((result) => setworkingTime(result.data.data));

        let workingTypeService = new WorkingTpyeService();
        workingTypeService.getworkingType().then((result) => setworkingTypes(result.data.data));

    }, [])
    const getEmployers = employers.map((employer, index) => ({
        key: index,
        text: employer.company_name,
        value: employer.user_id,
    }));
    const getCities = cities.map((city, index) => ({
        key: index,
        text: city.ctyName,
        value: city.cityId,
    }));

    const getPositions = positions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.position_name,
        value: jobPosition.id,
    }));
    const getWorkingTimes = workingTimes.map((workingTime, index) => ({
        key: index,
        text: workingTime.workingName,
        value: workingTime.workingId,
    }));

    const getWorkingTypes = workingTypes.map((workingType, index) => ({
        key: index,
        text: workingType.workingTypeName,
        value: workingType.workingTypeId,

    }));
    const formik = useFormik({
        initialValues: {
            job_description: "",
            salary: "",
            numberOfPositions: "",
            releaseDate: "",
            applicationDeadline: "",
            workingCondition: "",
            employer_id: "",
            city_id: "",
            position_id: "",
            working_id: "",
            workiing_type_id: "",

        },
        validationSchema: Yup.object({
            job_description: Yup.string().required("Zorunlu alan"),
            salary: Yup.number().required("Zorunlu alan"),
            numberOfPositions: Yup.number().required("Zorunlu alan"),
            releaseDate: Yup.date().required("Zorunlu alan"),
            applicationDeadline: Yup.date().required("Zorunlu alan"),
            workingCondition: Yup.boolean().required("Zorunlu alan"),
            employer_id: Yup.number().required("Zorunlu alan"),
            city_id: Yup.number().required("Zorunlu alan"),
            position_id: Yup.number().required("Zorunlu alan"),
            working_id: Yup.number().required("Zorunlu alan"),
            working_type_id: Yup.number().required("Zorunlu alan"),
        }),
        onSubmit: (values) => {
            let jobAdvert = {
                job_description: values.job_description,
                salary: values.salary,
                numberOfPositions: values.numberOfPositions,
                releaseDate: values.releaseDate,
                applicationDeadline: values.applicationDeadline,
                workingCondition: values.workingCondition,
                employer: { user_id: values.employer_id },
                city: { cityId: values.city_id },
                jobPosition: { id: values.position_id },
                workingTime: { workingId: values.working_id },
                workingType: { workingTypeId: values.working_type_id },
            };
            console.log(jobAdvert)
            jobAdvertisementService.jobPostingAdd(jobAdvert).then((result) => console.log(result.data.message));

            swal("Ekleme Başarılı!", `${values.jobId}`, "success");
        },

    });
    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='plus' circular />
                <Header.Content>İş İlanı Ekle</Header.Content>
            </Header>
            <Segment.Group>
                <Segment color="blue" key="blue"></Segment>
                <Segment>
                    <form onSubmit={formik.handleSubmit}>
                        <div
                            style={{
                                textAlign: "left",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                            }}
                        >
                            <div className="divStyle">
                                <label>Şehir:</label>
                                <Dropdown
                                    style={{
                                        marginRight: "0,5em",
                                        marginTop: "0,5em",
                                        fontWeight: "lighter",
                                    }}
                                    button
                                    placeholder="Şehir Seçiniz..."
                                    fluid
                                    search
                                    selection
                                    id="id"
                                    options={getCities}
                                    onChange={(event, data) =>
                                        formik.setFieldValue("city_id", data.value)
                                    }
                                    value={formik.values.cityId}
                                />
                                {formik.errors.city_id && formik.touched.city_id && (
                                    <p style={{ color: "red" }}>{formik.errors.city_id}</p>
                                )}
                            </div>
                            <div className="divStyle">
                                <label>İş Pozisyonu:</label>
                                <Dropdown
                                    style={{
                                        marginRight: "0,5em",
                                        marginTop: "0,5em",
                                        fontWeight: "lighter",
                                    }}
                                    button
                                    placeholder="İş Pozisyonu Seçiniz..."
                                    fluid
                                    search
                                    selection
                                    id="position_id"
                                    options={getPositions}
                                    onChange={(event, data) =>
                                        formik.setFieldValue("position_id", data.value)
                                    }
                                    value={formik.values.id}
                                />
                                {formik.errors.position_id && formik.touched.position_id && (
                                    <p style={{ color: "red" }}>{formik.errors.position_id}</p>
                                )}
                            </div>
                            <div className="divStyle">
                                <label>Çalışma Zaman Türleri:</label>
                                <Dropdown
                                    style={{
                                        marginRight: "0,5em",
                                        marginTop: "0,5em",
                                        fontWeight: "lighter",
                                    }}
                                    button
                                    placeholder="Çalışma Zaman Türünü Seçiniz..."
                                    fluid
                                    search
                                    selection
                                    id="workingId"
                                    options={getWorkingTimes}
                                    onChange={(event, data) =>
                                        formik.setFieldValue("working_id", data.value)
                                    }
                                    value={formik.values.workingId}
                                />
                                {formik.errors.working_id && formik.touched.working_id && (
                                    <p style={{ color: "red" }}>{formik.errors.working_id}</p>
                                )}
                            </div>
                            <div className="divStyle">
                                <label>Çalışma Türleri:</label>
                                <Dropdown
                                    style={{
                                        marginRight: "0,5em",
                                        marginTop: "0,5em",
                                        fontWeight: "lighter",
                                    }}
                                    button
                                    placeholder="Çalışma Türünü Seçiniz..."
                                    fluid
                                    search
                                    selection
                                    id="workingTypeId"
                                    options={getWorkingTypes}
                                    onChange={(event, data) =>
                                        formik.setFieldValue("working_type_id", data.value)
                                    }
                                    value={formik.values.workingTypeId}
                                />
                                {formik.errors.working_type_id && formik.touched.working_type_id && (
                                    <p style={{ color: "red" }}>{formik.errors.working_type_id}</p>
                                )}
                            </div>
                            <div className="divStyle">
                                <label>İş ilanı Yayınlayan Firma:</label>
                                <Dropdown
                                    style={{
                                        marginRight: "0,5em",
                                        marginTop: "0,5em",
                                        fontWeight: "lighter",
                                    }}
                                    button
                                    placeholder="İş veren firma..."
                                    fluid
                                    search
                                    selection
                                    id="id"
                                    options={getEmployers}
                                    onChange={(event, data) =>
                                        formik.setFieldValue("employer_id", data.value)
                                    }
                                    value={formik.values.user_id}
                                />
                                {formik.errors.employer_id && formik.touched.employer_id && (
                                    <p style={{ color: "red" }}>{formik.errors.employer_id}</p>
                                )}
                            </div>
                            <div className="divStyle">
                                <label>Maaş:</label>
                                <Input
                                    id="salary"
                                    placeholder="Maaş..."
                                    fluid
                                    style={{ marginRight: "1em", marginTop: "1em" }}
                                    onChange={formik.handleChange}
                                    value={formik.values.salary}
                                ></Input>
                                {formik.errors.salary && formik.touched.salary && (
                                    <p style={{ color: "red" }}>{formik.errors.salary}</p>
                                )}
                            </div>
                            <div className="divStyle">
                                <label>Alınacak Personel Sayısı:</label>
                                <Input
                                    id="numberOfPositions"
                                    placeholder="Alınacak Personel Sayısı..."
                                    fluid
                                    style={{ marginRight: "0,5em", marginTop: "0,5em" }}
                                    onChange={formik.handleChange}
                                    value={formik.values.numberOfPositions}
                                ></Input>
                                {formik.errors.numberOfPositions &&
                                    formik.touched.numberOfPositions && (
                                        <p style={{ color: "red" }}>
                                            {formik.errors.numberOfPositions}
                                        </p>
                                    )}
                            </div>
                            <div className="divStyle">
                                <label>Yayın Tarihi:</label>
                                <Input
                                    type="date"
                                    id="releaseDate"
                                    placeholder="Yayın Tarihi..."
                                    fluid
                                    style={{ marginRight: "0,5em", marginTop: "0,5em" }}
                                    onChange={formik.handleChange}
                                    value={formik.values.releaseDate}
                                ></Input>
                                {formik.errors.releaseDate && formik.touched.releaseDate && (
                                    <p style={{ color: "red" }}>{formik.errors.releaseDate}</p>
                                )}
                            </div>
                            <div className="divStyle">
                                <label>Son Başvuru Tarihi:</label>
                                <Input
                                    type="date"
                                    id="applicationDeadline"
                                    placeholder="Son Başvuru Tarihi..."
                                    fluid
                                    style={{ marginRight: "0,5em", marginTop: "0,5em" }}
                                    onChange={formik.handleChange}
                                    value={formik.values.applicationDeadline}
                                ></Input>
                                {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                                    <p style={{ color: "red" }}>{formik.errors.applicationDeadline}</p>
                                )}
                            </div>

                            <div className="divStyle">
                                <label>Açıklama:</label>
                                <Input
                                    id="job_description"
                                    placeholder="Açıklama..."
                                    fluid
                                    style={{ marginRight: "0,5em", marginTop: "0,5em" }}
                                    onChange={formik.handleChange}
                                    value={formik.values.job_description}
                                ></Input>
                                {formik.errors.job_description && formik.touched.job_description && (
                                    <p style={{ color: "red" }}>{formik.errors.job_description}</p>
                                )}
                            </div>
                            <div className="divStyle">
                                <label>iş Durumu:</label>
                                <Input
                                    id="workingCondition"
                                    placeholder="Açıklama..."
                                    fluid
                                    style={{ marginRight: "0,5em", marginTop: "0,5em" }}
                                    onChange={formik.handleChange}
                                    value={formik.values.workingCondition}
                                ></Input>
                                {formik.errors.workingCondition && formik.touched.workingCondition && (
                                    <p style={{ color: "red" }}>{formik.errors.workingCondition}</p>
                                )}
                            </div>
                        </div>
                        <Button inverted color='blue' type='submit'>
                            İlanı Yayınla
                        </Button>
                    </form>
                </Segment>
            </Segment.Group>
        </div>
    );
}
