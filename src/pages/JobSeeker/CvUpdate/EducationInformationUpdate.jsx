import React, { useState, useEffect } from 'react'
import EducationInformationSeervice from "../../../services/educationInformationService"
import { Formik, Form } from 'formik'
import { Button, Modal, Divider, Segment, Grid } from 'semantic-ui-react'
import * as Yub from 'yup'
import HrmsTextInput from '../../../utilities/customFormControls/HrmsTextInput'
import HrmsDropdown from "../../../utilities/customFormControls/HrmsDropdown"
import FacultyService from '../../../services/facultyService'
import EpisodeService from '../../../services/episodeService'
import EducationLevelService from '../../../services/educationLevelService'
import UniversityService from '../../../services/universityService'
import CityService from '../../../services/cityService'
import TypeOfTeachingService from '../../../services/typeOfTeachingService'
export default function EducationInformationUpdate(props) {
    let educationInformationService = new EducationInformationSeervice();
    const [open, setOpen] = useState(false);
    const [educationInformation, setEducationInformation] = useState([]);
    const [faculties, setfaculties] = useState([]);
    const [episodes, setEpisode] = useState([]);
    const [educationLevels, setEducationLevels] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [cities, setCities] = useState([]);
    const [typeOfTeaching, setTypeOfTeaching] = useState([]);
    useEffect(() => {
        educationInformationService.getByJobSeeker(17).then((result) => setEducationInformation(result.data.data));

        let facultyService = new FacultyService();
        facultyService.getAll().then((result) => setfaculties(result.data.data));
        let episodeService = new EpisodeService();
        episodeService.getAll().then((result) => setEpisode(result.data.data))
        let educationLevelSercive = new EducationLevelService();
        educationLevelSercive.getAll().then((result) => setEducationLevels(result.data.data))
        let universityService = new UniversityService();
        universityService.getAll().then((result) => setUniversities(result.data.data))
        let cityService = new CityService();
        cityService.getCity().then((result) => setCities(result.data.data))
        let typeOfTeachingService = new TypeOfTeachingService();
        typeOfTeachingService.getAll().then((result) => setTypeOfTeaching(result.data.data))
    }, []);

    const getFaculties = faculties.map((faculty, index) => ({
        key: index,
        text: faculty.facultyName,
        value: faculty.facultyId,
    }));
    const getEpisodes = episodes.map((episode, index) => ({
        key: index,
        text: episode.episodeName,
        value: episode.episodeId,
    }));
    const getEducationLevels = educationLevels.map((educationLevel, index) => ({
        key: index,
        text: educationLevel.educationName,
        value: educationLevel.educationId,
    }));
    const getUniversities = universities.map((university, index) => ({
        key: index,
        text: university.universtyName,
        value: university.universtyId,
    }));
    const getCities = cities.map((city, index) => ({
        key: index,
        text: city.ctyName,
        value: city.cityId,
    }));
    const getTypeOfTeaching = typeOfTeaching.map((ofTeaching, index) => ({
        key: index,
        text: ofTeaching.teachingName,
        value: ofTeaching.teachingId,
    }));

    const initialValues = {
        id:1,
        user_id: props.user_id,
        startDate: "",
        endDate: "",
        educationStatus: "",
        education_level_id: "",
        university_id: "",
        city_id: "",
        faculty_id: "",
        episode_id: "",
        type_of_teaching_id: "",
    }
    const schema = Yub.object({
        user_id: Yub.number(),
        startDate: Yub.date().required("Zorunlu alan"),
        endDate: Yub.date().required("Zorunlu alan"),
        educationStatus: Yub.string().required("Zorunlu alan"),
        education_level_id: Yub.number().required("Zorunlu alan"),
        university_id: Yub.number().required("Zorunlu alan"),
        city_id: Yub.number().required("Zorunlu alan"),
        faculty_id: Yub.number().required("Zorunlu alan"),
        episode_id: Yub.number().required("Zorunlu alan"),
        type_of_teaching_id: Yub.number().required("Zorunlu alan"),
    });

    function handleUpdate(values) {
        educationInformationService.update(values);
    }
    return (
        <div>
            <Modal
                onClose={() => {
                    setOpen(false);
                }}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                    <Button fluid style={{ marginTop: "15px", backgroundColor: "white" }}>
                        Eğitim bilgilerini güncelemek için tıklayın
                    </Button>
                }
            >
                <Modal.Header>Eğitim Bilgilerini Güncelle</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        {
                            educationInformation.map((education) => (
                                <Formik key={education.id}
                                    initialValues={{
                                        id: education.id,
                                        user_id: education.jobSeeker.user_id,
                                        startDate: education.startDate,
                                        endDate: education.endDate,
                                        educationStatus: education.educationStatus,
                                        education_level_id: education.educationLevel.educationId,
                                        university_id: education.university.universtyId,
                                        city_id: education.city.cityId,
                                        faculty_id: education.faculty.facultyId,
                                        episode_id: education.episode.episodeId,
                                        type_of_teaching_id: education.ofTeaching.teachingId,

                                    }}
                                    validationSchema={schema}
                                    onSubmit={(values) => {
                                        handleUpdate(values);
                                    }}
                                >
                                    <Form className="ui form" onSubmit={Formik.handleSubmit}>
                                        <Segment

                                            style={{ marginBottom: "20px", marginTop: "10px" }}
                                        >
                                            <div
                                                style={{
                                                    paddingTop: "5px",
                                                    lineHeight: "0px",
                                                    fontSize: "20px",

                                                }}
                                            >
                                                <Grid columns={2} textAlign="left" >
                                                    <Grid.Column>
                                                        <p>
                                                            <h4>Başlama Tarihi </h4>
                                                            <span className="cv-left-grey-text">
                                                                {education.startDate}
                                                            </span></p>

                                                        <p>
                                                            <h4 > Bitti mi ? Devam mı ediyor ? </h4>
                                                            <span className="cv-left-grey-text">
                                                                {education.endDate == null ? "Hala devam ediyor" : education.endDate}
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <h4>Mezun mu? Terk mi? </h4>
                                                            <span className="cv-left-grey-text">
                                                                {education.educationStatus == null ? "Mezun" : education.educationStatus}
                                                            </span></p>

                                                        <p>
                                                            <h4>Eğitim Seviyesi </h4>
                                                            <span className="cv-left-grey-text">
                                                                {education.educationLevel.educationName}
                                                            </span></p>

                                                        <p>
                                                            <h4>Üniversite </h4> <span className="cv-left-grey-text">
                                                                {education.university.universtyName}
                                                            </span></p>
                                                    </Grid.Column>
                                                    <Grid.Column>
                                                        <p>
                                                            <h4>Şehir </h4><span className="cv-left-grey-text">
                                                                {education.city.ctyName}
                                                            </span></p>

                                                        <p>
                                                            <h4>Fakülte </h4><span className="cv-left-grey-text">
                                                                {education.faculty.facultyName}
                                                            </span></p>

                                                        <p>
                                                            <h4>Bölüm </h4><span className="cv-left-grey-text">
                                                                {education.episode.episodeName}
                                                            </span></p>

                                                        <p>
                                                            <h4>Öğretim Türü </h4>
                                                            <span className="cv-left-grey-text">
                                                                {education.ofTeaching.teachingName}
                                                            </span>
                                                        </p>

                                                    </Grid.Column>
                                                </Grid>
                                                <Divider horizontal>Ve</Divider>
                                            </div>
                                        </Segment>
                                        <HrmsTextInput type="date" name="startDate" planceholder="Başlama Tarihi" onChange={Formik.handleChange} value={Formik.startDate} />
                                        <HrmsTextInput type="date" name="endDate" planceholder="Bitiş Tarihi" onChange={Formik.handleChange} value={Formik.endDate} />
                                        <HrmsTextInput type="text" name="educationStatus" planceholder="Mezun mu?/ Terk mi?" onChange={Formik.handleChange} value={Formik.educationStatus == null ? "Mezun" : Formik.educationStatus} />
                                        <HrmsDropdown options={getEducationLevels} placeholder="Eğitim Seviyesi" name="eeducation_level_id" className="my-input" />
                                        <HrmsDropdown options={getUniversities} placeholder="Üniversite Seçiniz" name="university_id" className="my-input" />
                                        <HrmsDropdown options={getCities} placeholder="Şehir Seçiniz" name="city_id" className="my-input" />
                                        <HrmsDropdown options={getFaculties} placeholder="Fakulte Seçiniz" name="faculty_id" className="my-input" />
                                        <HrmsDropdown options={getEpisodes} placeholder="Bölüm Seçiniz" name="episode_id" className="my-input" />
                                        <HrmsDropdown options={getTypeOfTeaching} placeholder="Öğretim Türü Seçiniz" name="type_of_teaching_id" className="my-input" />
                                        <Button
                                            content="Güncelle"
                                            labelPosition="right"
                                            icon="sync"
                                            primary
                                            fluid
                                            type="submit"
                                            style={{ marginTop: "10px", marginBottom: "40px" }}
                                        />
                                    </Form>
                                </Formik>
                            ))
                        }
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}
