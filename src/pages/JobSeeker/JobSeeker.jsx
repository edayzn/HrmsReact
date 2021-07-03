import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Yub from "yup";
import JobSeekerService from "../../services/jobSeekerService"
import PhotoService from '../../services/photoService';
import { Divider, Grid, Image,Icon } from 'semantic-ui-react';
import { result } from 'lodash';
export default function JobSeeker() {
    const [jobSeeker, setJobSeeker] = useState({});
    const [photo, setPhoto] = useState({})
    const { id } = useParams();
    let jobSeekerService = new JobSeekerService();
    let photoService=new PhotoService();
    const initialValues = {
        user_id: 17,
        firstname: jobSeeker.firstname,
        lastname: jobSeeker.lastname,
        identification_number: jobSeeker.identification_number,
        yearOfBirth: jobSeeker.yearOfBirth,
        e_mail: jobSeeker.e_mail,
        password: jobSeeker.password,
        photoUrl: "",
    };
    const photoInitialValues={
        user_id:17,
        photoUrl:photo.photoUrl,
    };
    useEffect(() => {
        jobSeekerService.getById(17).then((result) => setJobSeeker(result.data.data));
        photoService.getById(17).then((result)=>setPhoto(result.data.data));
    }, []);
    const photoSchema=Yub.object({
        user_id: Yub.number(),
        photoUrl:Yub.string(),
    })
    const schema = Yub.object({
        user_id: Yub.number(),
        firstname: Yub.string(),
        lastname: Yub.string(),
        identification_number: Yub.string(),
        e_mail: Yub.string(),
        password: Yub.string(),

    })
    return (
        <div>

            <Divider horizontal style={{ marginBottom: "40px" }}>
                <div
                    style={{ paddingTop: "10px", lineHeight: "0px", fontSize: "20px" }}
                >
                    PROFİL
                </div>
            </Divider>
            <div>
                <Grid columns={2} divided>
                    <Grid.Row
                        style={{
                            alignItems: "center",
                            padding: "0",
                            backgroundColor: "white",
                            borderRadius: "15px",
                        }}
                    >
                        <Grid.Column width={5}
                            style={{ paddingRight: "0px", height: "100%", paddingLeft: "0" }}
                        >
                            <div className="photo-left">
                                <div>
                                    <Image
                                        className="profile-img"
                                        src={photo.photoUrl}
                                        size="small"
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            marginTop: "20px",
                                        }}
                                    />
                                    <div style={{ marginTop: "20px", fontSize: "25px" }}>
                                        {jobSeeker.firstname}{" "}
                                        {jobSeeker.lastname}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        textAlign: "left",
                                        marginLeft: "20px",
                                        marginTop: "40px",
                                    }}
                                >
                                    <div>
                                        <div className="left-bar-header">
                                            <Icon name="lock open" /> TC Numarası
                                        </div>
                                        <span style={{ color: "#d4d4d4" }}>
                                            {jobSeeker.identification_number}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="cv-left-bar-header">
                                            <Icon name="at" /> Email
                                        </div>
                                        <span style={{ color: "#d4d4d4" }}>
                                            {jobSeeker.e_mail}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        </div>
    )
}
