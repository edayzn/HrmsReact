import React from 'react'
import { useState, useEffect } from 'react';
import EducationInformationService from '../../services/educationInformationService'
import FacultyService from '../../services/facultyService'
import EpisodeService from '../../services/episodeService'
import EducationLevelService from '../../services/educationLevelService'
import UniversityService from '../../services/universityService'
import CityService from '../../services/cityService'
import TypeOfTeachingService from '../../services/typeOfTeachingService'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import * as Yub from 'yup'
import { Formik, useFormik,Field } from 'formik'
import { Input, Button, Header, Icon, Segment, Dropdown, Select, GridColumn, FormField } from 'semantic-ui-react'

export default function EducationInformationAdd() {

    let educationInformationSercive = new EducationInformationService();
    const [faculties, setfaculties] = useState([]);
    const [episodes, setEpisode] = useState([]);
    const [educationLevels, setEducationLevels] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [cities, setCities] = useState([]);
    const [typeOfTeaching, setTypeOfTeaching] = useState([]);
    useEffect(() => {
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
    }, [])
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
        startDate: "",
        endDate: "",
        educationStatus: "",
        user_id: 0,
        education_level_id: 0,
        university_id: 0,
        city_id: 0,
        faculty_id: 0,
        episode_id: 0,
        type_of_teaching_id: 0
    }
    const schema = Yub.object({
        startDate: Yub.date().required("Zorunlu Alan"),
        endDate: Yub.date().required("Zorunlu Alan"),
        educationStatus: Yub.string(),
        user_id: Yub.number().required("Zorunlu Alan"),
        education_level_id: Yub.number().required("Zorunlu Alan"),
        university_id: Yub.number().required("Zorunlu Alan"),
        city_id: Yub.number().required("Zorunlu Alan"),
        faculty_id: Yub.number().required("Zorunlu Alan"),
        episode_id: Yub.number().required("Zorunlu Alan"),
        type_of_teaching_id: Yub.number().required("Zorunlu Alan"),
    })
    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='plus' circular />
                <Header.Content>İş İlanı Ekle</Header.Content>
            </Header>
            <Segment.Group>
                <Segment color="blue" key="blue"></Segment>
                <Segment>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            let educationInformation = {
                                startDate: values.startDate,
                                endDate: values.endDate,
                                educationStatus: values.educationStatus,
                                jobSeeker: { user_id: values.user_id },
                                educationLevel: { educationId: values.education_level_id },
                                university: { universtyId: values.university_id },
                                city: { cityId: values.city_id },
                                faculty: { facultyId: values.faculty_id },
                                episode: { episodeId: values.episode_id },
                                ofTeaching: { teachingId: values.type_of_teaching_id },
                            }
                            educationInformationSercive.add(educationInformation).then((result) => console.log(result.data.message));
                        }}
                    >
                        <form className="ui form" onSubmit={Formik.handleSubmit}>
                            <div
                                style={{
                                    textAlign: "left",
                                    fontFamily: "Arial",
                                    fontWeight: "bold",
                                }}
                            >
                                <HrmsTextInput type="date" name="startDate" planceholder="Başlangıç tarihi.." onChange={Formik.handleChange} value={Formik.startDate} ></HrmsTextInput>
                                <HrmsTextInput type="date" name="endDate" planceholder="Bitiş tarihi.." onChange={Formik.handleChange} value={Formik.endDate} ></HrmsTextInput>

                              
                            </div>
                        </form>
                    </Formik>
                </Segment>
            </Segment.Group>
        </div>
    )
}
