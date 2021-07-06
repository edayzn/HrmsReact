
import React, { useState, useEffect } from 'react'
import CvService from '../../services/cvService'
import JobSeekerService from "../../services/jobSeekerService"
import { Table } from 'semantic-ui-react'
import CoverLetterUpdate from "../JobSeeker/CvUpdate/CoverLetterUpdate"
import { NavLink, useParams } from 'react-router-dom';
import { Image, Icon, Grid, Divider } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import * as Yub from "yup";
export default function CvList() {
    const { userId } = useParams();
    const [jobSeekerCv, setJobSeekerCv] = useState([])
    const [open, setOpen] = useState(false);
    useEffect(() => {
        let cvService = new CvService()
        cvService.getUserIdCv(17).then(result => setJobSeekerCv(result.data.data));
    }, [])
    const initialValues = {
        user_id: 17,
        firstname: jobSeekerCv.jobSeeker?.firstname,
        lastname: jobSeekerCv.jobSeeker?.lastname,
        identification_number: jobSeekerCv.jobSeeker?.identification_number,
        yearOfBirth: jobSeekerCv.jobSeeker?.yearOfBirth,
        e_mail: jobSeekerCv.jobSeeker?.e_mail,
        password: jobSeekerCv.jobSeeker?.password,
        photoUrl: "",
    };
    const schema = Yub.object({
        user_id: Yub.number(),
        firstname: Yub.string(),
        lastname: Yub.string(),
        identification_number: Yub.string(),
        yearOfBirth: Yub.date(),
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
            <div className="cv-container">
                <Grid>
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
                            <div className="cv-left">
                                <div>
                                    <Image
                                        className="cv-profile-img"
                                        src={jobSeekerCv.photo?.photoUrl}
                                        size="small"
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            marginTop: "20px",
                                        }}
                                    />
                                    <div style={{ marginTop: "20px", fontSize: "25px" }}>
                                        {jobSeekerCv.jobSeeker?.firstname}{" "}
                                        {jobSeekerCv.jobSeeker?.lastname}
                                    </div>
                                </div>
                                <div style={{
                                    textAlign: "left",
                                    marginLeft: "20px",
                                    marginTop: "40px",
                                }}
                                >
                                    <div>
                                        <div className="cv-left-bar-header">
                                            <Icon name="at" /> Email
                                        </div>
                                        <span style={{ color: "#d4d4d4" }}>
                                            {jobSeekerCv.jobSeeker?.e_mail}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="cv-left-bar-header">
                                            <Icon name="table" /> Doğum Yılı
                                        </div>
                                        <span style={{ color: "#d4d4d4" }}>
                                            {jobSeekerCv.jobSeeker?.yearOfBirth}
                                        </span>
                                    </div>
                                    <div>
                                        <div>
                                            <div className="cv-left-bar-header">
                                                <Icon name="linkify" /> Linkler
                                            </div>
                                            <span style={{ color: "#d4d4d4" }}>
                                                {jobSeekerCv.accounts?.socialAccount}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column
                            width={11}
                            style={{ paddingLeft: "0px", height: "100%", padding: "0px" }}
                        >
                            <div className="cv-right"
                                style={{
                                    backgroundColor: "#fff",
                                    padding: "30px",
                                    paddingBottom: "5px",
                                }}>
                                <div className="job-experiences" style={{ marginLeft: "15px" }}>
                                    <div className="cv-right-header">
                                        <Icon name="briefcase" /> <b>Ön Yazı</b>
                                    </div>
                                    <div>
                                        <List>
                                            {
                                                jobSeekerCv.coverLettervs?.map((cover) => (
                                                    <List.Item
                                                        key={cover.id}
                                                        style={{ marginTop: "35px" }}

                                                    >
                                                        <Grid>
                                                            <Grid.Row style={{
                                                                paddingTop: "0px",
                                                                paddingBottom: "25px",
                                                            }}
                                                            >
                                                                <Grid.Column >
                                                                    <div style={{ textAlign: "center" }}>
                                                                        <div
                                                                            style={{
                                                                                fontSize: "18px",
                                                                                marginBottom: "7px",
                                                                            }}
                                                                        >
                                                                            Ön Yazı
                                                                        </div>
                                                                        <span className="cv-right-grey-text">
                                                                            {cover.coverLetter}
                                                                        </span>
                                                                    </div>
                                                                </Grid.Column>

                                                            </Grid.Row>
                                                        </Grid>
                                                    </List.Item>
                                                ))
                                            }

                                        </List>
                                        <CoverLetterUpdate>
                                            jobSeekerCoverLetter={jobSeekerCv.coverLettervs}
                                            user_id={17}
                                        </CoverLetterUpdate>
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
