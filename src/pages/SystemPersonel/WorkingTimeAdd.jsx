import React from 'react'
import WorkingTimeService from '../../services/workingTimeService'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import swal from 'sweetalert';
import { Input, Button, Header, Icon, Segment } from 'semantic-ui-react'
export default function WorkingTime() {
    let workingTimeService = new WorkingTimeService();

    const formik = useFormik({
        initialValues: {
            workingName: "",
        },
        validationSchema: Yup.object({
            workingName: Yup.string().required("Zorunlu Alan"),
        }),
        onSubmit: (values) => {
            let workingTimes = { workingName: values.workingName, };
            console.log(workingTimes);
            workingTimeService.addWorkingTime(workingTimes).then((result) => console.log(result.data.message));
            swal("Ekleme Başarılı!", `${values.workingId}`, "success");
        },
    });

    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='plus' circular />
                <Header.Content>Çalışma Zaman Türleri Ekle</Header.Content>
            </Header>
            <Segment.Group>
                <Segment color="blue" key="blue"></Segment>
                <form onSubmit={formik.handleSubmit}>
                    <div style={{
                        textAlign: "left",
                        fontFamily: "Arial",
                        fontWeight: "bold",
                    }}
                    >
                        <div className="divStyle">
                                <label>Çalışma Türleri:</label>
                                <Input
                                    id="workingName"
                                    placeholder="Çalışma türleri ..."
                                    fluid
                                    style={{ marginRight: "1em", marginTop: "1em" }}
                                    onChange={formik.handleChange}
                                    value={formik.values.workingName}
                                ></Input>
                                {formik.errors.workingName && formik.touched.workingName && (
                                    <p style={{ color: "red" }}>{formik.errors.workingName}</p>
                                )}
                            </div>
                    </div>
                    <Button inverted color='blue' type='submit'>Kaydet</Button>
                </form>
            </Segment.Group>
        </div>
    )
}
