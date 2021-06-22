import React from 'react'
import WorkingTpyeService from '../../services/workingTypeService';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import swal from 'sweetalert';
import { Input, Button, Header, Icon, Segment } from 'semantic-ui-react'
export default function WorkingTypeAdd() {
    let workingTypeService = new WorkingTpyeService();
    const formik = useFormik({
        initialValues: {
            workingTypeName: "",
        }, validationSchema: Yup.object({
            workingTypeName: Yup.string().required("Zorunlu alan"),
        }),
        onSubmit: (values) => {
            let workingTypes = {
                workingTypeName: values.workingTypeName,
            };
            console.log(workingTypes);
            workingTypeService.workingTypeAdd(workingTypes).then((result) => console.log(result.data.data));
            swal("Ekleme Başarılı!", `${values.workingTypeId}`, "success");
        }
    });

    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='plus' circular />
                <Header.Content>Çalışma Türleri Ekle</Header.Content>
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
                                    id="workingTypeName"
                                    placeholder="Çalışma türleri ..."
                                    fluid
                                    style={{ marginRight: "1em", marginTop: "1em" }}
                                    onChange={formik.handleChange}
                                    value={formik.values.workingTypeName}
                                ></Input>
                                {formik.errors.workingTypeName && formik.touched.workingTypeName && (
                                    <p style={{ color: "red" }}>{formik.errors.workingTypeName}</p>
                                )}
                            </div>
                    </div>
                    <Button inverted color='blue' type='submit'>Kaydet</Button>
                </form>
            </Segment.Group>
        </div>
    )
}
