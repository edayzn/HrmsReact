import React from 'react'
import PersonelService from '../../services/personelService';
import * as Yub from 'yup'
import { Formik, Form } from 'formik'
import { Button, Header, Icon, Segment, Label } from 'semantic-ui-react'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
export default function PersonelAdd() {
    let personelService = new PersonelService();

    const initialValues = {
        firstName: "",
        lastName: "",
        e_mail: "",
        password: "",
    }
    const schema = Yub.object({
        firstName: Yub.string().required("Zorunlu Alan"),
        lastName: Yub.string().required("Zorunlu Alan"),
        e_mail: Yub.string().required("Zorunlu Alan"),
        password: Yub.string().required("Zorunlu Alan"),
    });

    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='plus' circular />
                <Header.Content>Personel Ekle</Header.Content>
            </Header>
            <Segment.Group>
                <Segment color="teal" key="blue"></Segment>
                <Segment>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            let systemPersonel = {
                                firstName: values.firstName,
                                lastName: values.lastName,
                                e_mail: values.e_mail,
                                password: values.password,
                            }

                            personelService.add(systemPersonel).then((result) => console.log(result.data.message));
                        }}
                    >
                        {({
                            values,handleChange,handleSubmit,
                        }) => (
                            <form className="ui form" onSubmit={handleSubmit}>
                                <HrmsTextInput type="text" name="firstName" placeholder="Ad" onChange={handleChange} value={values.firstName}></HrmsTextInput>
                                <HrmsTextInput type="text" name="lastName" placeholder="Soyad" onChange={handleChange} value={values.lastName}></HrmsTextInput>
                                <HrmsTextInput type="text" name="e_mail" placeholder="E-mail" onChange={handleChange} value={values.e_mail}></HrmsTextInput>
                                <HrmsTextInput type="text" name="password" placeholder="Şifre" onChange={handleChange} value={values.password}></HrmsTextInput>
                                <Button color="brown" type="submit">Ekle</Button>
                            </form>
                        )}
                    </Formik>
                </Segment>
            </Segment.Group>
        </div>
    )
}
