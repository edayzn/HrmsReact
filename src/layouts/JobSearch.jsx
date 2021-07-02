import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import CityService from "../services/cityService.js"
import WorkingTime from "../services/workingTimeService"
import JobPostingService from "../services/jobPostingService"
import * as Yub from 'yup'
import { Formik, Form } from 'formik'
import HrmsDropdown from '../utilities/customFormControls/HrmsDropdown.jsx'
import { useHistory } from "react-router";
export default function JobSearch() {
    let jobPostingService = new JobPostingService();
    const [cities, setCity] = useState([])
    const [workingTimes, setWorkingTime] = useState([])
    const history = useHistory();
    useEffect(() => {
        let cityService = new CityService()
        cityService.getCity().then(result => setCity(result.data.data));
        let workingTimeService = new WorkingTime();
        workingTimeService.getWorkingTime().then((result) => setWorkingTime(result.data.data));

    }, [])
    const getCities = cities.map((city, index) => ({
        key: index,
        text: city.ctyName,
        value: city.cityId,
    }));
    const getworkingTimes = workingTimes.map((workingTime, index) => ({
        key: index,
        text: workingTime.workingName,
        value: workingTime.workingId,
    }));

    const initialValues = {
        cityId: 0,
        workingId: 0,
    }
    const pageInitialValues = {
        pageNo: 1,
        pageSize: "",
    }
    const pageSchema = Yub.object({
        pageNo: Yub.number(),
        pageSize: Yub.number().required("Sayfa Büyüklüğü Girmek Zorunludur"),
    });

    const schema = Yub.object({
        cityId: Yub.number(),
        workingId: Yub.number(),
    });
   
    const paginations = [
        { key: 1, text: 5, value: 5 },
        { key: 2, text: 10, value: 10 },
        { key: 3, text: 20, value: 20 },
        { key: 4, text: 50, value: 50 },
        { key: 5, text: 100, value: 100 },
    ];
    function handleFilter(values) {
        if (values.cityId && values.workingId) {
            jobPostingService.getCityIdAndWorkingTimeId(values.cityId, values.workingId);
        }
        else if (values.workingId) {
            jobPostingService.getWorkingId(values.workingId);
        }
        else if (values.cityId) {
            jobPostingService.getCityId(values.cityId);
        }
    }
    function handlePage(values) {
        jobPostingService.getPage(values.pageNo, values.pageSize);
    }
    return (
        <div>
            <div>
                <Grid columns='equal'>
                    <Grid.Column >
                        <Formik initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={(values) => {
                                handleFilter(values);
                            }}
                        >
                            <Form className="ui form" >
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={6}>
                                            <div className="divStyle">
                                                <HrmsDropdown
                                                    options={getCities}
                                                    placeholder="Şehir Seçiniz.."
                                                    name="cityId"
                                                    className="my-input"></HrmsDropdown></div>
                                        </Grid.Column>
                                        <Grid.Column width={6}>
                                            <div className="divStyle">
                                                <HrmsDropdown
                                                    options={getworkingTimes}
                                                    placeholder="Çalışma Zamanı Seçiniz.."
                                                    name="workingId"
                                                    className="my-input"
                                                ></HrmsDropdown></div>
                                        </Grid.Column>
                                        <Grid.Column width={4} >
                                            <Button
                                                fluid
                                                content="Filtrele"
                                                icon="search"
                                                primary
                                                type="submit"
                                                style={{ marginTop: "10px" }}
                                            />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Form>
                        </Formik>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Formik
                            initialValues={pageInitialValues}
                            validationSchema={pageSchema}
                            onSubmit={(values) => {
                                handlePage(values);
                            }}
                        >
                            <Form className="ui form" >
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={13}>
                                            <HrmsDropdown
                                                options={paginations}
                                                placeholder="Sayfa Büyüklüğü Seçiniz"
                                                name="pageSize"
                                                className="my-input"
                                            />
                                        </Grid.Column>
                                        <Grid.Column width={3} style={{ paddingLeft: "0" }}>
                                            <Button 
                                                fluid
                                                icon="arrow alternate circle right outline"
                                                primary
                                                type="submit"
                                                style={{ marginTop: "10px", borderRadius: "30px" }}
                                            />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Form>
                        </Formik>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )
}

