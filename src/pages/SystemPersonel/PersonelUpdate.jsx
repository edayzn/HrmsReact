import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import SystemPersonelService from "../../services/personelService"
import * as Yub from "yup";
import { Formik, Form } from "formik";
import { Button, Divider, Header } from "semantic-ui-react";
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
export default function PersonelUpdate() {
    const { id } = useParams();
    const [systemPersonel, setSystemPersonel] = useState({});
    let systemPersonelService = new SystemPersonelService();
    const initualValues = {
        user_id:23,
        firstName:systemPersonel.firstName,
        lastName:systemPersonel.lastName,
        e_mail:systemPersonel.e_mail,
        password:systemPersonel.password,
    };
    useEffect (() => {
        systemPersonelService.getById(23).then((result) => setSystemPersonel(result.data.data));
    }, []);

    const schema = Yub.object({
        user_id:Yub.number(),
        firstName:Yub.string().required("Zorunlu Alan"),
        lastName:Yub.string().required("Zorunlu Alan"),
        e_mail:Yub.string().required("Zorunlu Alan"),
        password:Yub.string(),
    });

    return (
        <div>
            <Divider horizontal style={{ marginBottom: "30px" }}>
                <div
                    style={{ paddingTop: "10px", lineHeight: "0px", fontSize: "20px" }}
                >
                    PROFİL
                </div>
                <Header style={{ textAlign: "left" }}>
                    Kullanıcı Bilgileri
                </Header>
            </Divider>
            <Formik
                enableReinitialize
                initialValues={initualValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    systemPersonelService.update(values);
                }}
            >
                <Form className="ui form">
                    <HrmsTextInput name="firstName" type="text" ></HrmsTextInput>
                    <HrmsTextInput name="lastName" type="text" ></HrmsTextInput>
                    <HrmsTextInput name="e_mail" type="text" ></HrmsTextInput>
                    <Button
                        content="Güncelle"
                        labelPosition="right"
                        icon="sync"
                        color="teal"
                        type="submit"
                        style={{ marginTop: "10px" ,borderRadius: "30px" }}
                    />
                </Form>

            </Formik>
        </div>
    )
}
