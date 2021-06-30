import React from 'react'
import JobPostingsList from '../pages/Employer/JobPostingsList';
import JobSearch from './JobSearch';
import ComputerSkill from "../pages/JobSeeker/ComputerSkill"
import JobPostingAdd from '../pages/Employer/JobPostingAdd';
import WorkingTimeAdd from '../pages/SystemPersonel/WorkingTimeAdd';
import WorkingTypeAdd from '../pages/SystemPersonel/WorkingTypeAdd';
import { Route } from 'react-router';
import JobPostingDetail from '../pages/Employer/JobPostingDetail';
import CvList from '../pages/JobSeeker/CvList';
import CvDetail from '../pages/JobSeeker/CvDetail';
import ComputerSkillAdd from '../pages/JobSeeker/ComputerSkillAdd';
import CoverLetterAdd from '../pages/JobSeeker/CoverLetterAdd';
import EducationInformationAdd from '../pages/JobSeeker/EducationInformationAdd';
import PersonelAdd from '../pages/SystemPersonel/PersonelAdd';
import CoverLetterUpdate from '../pages/JobSeeker/CoverLetterUpdate';
import CoverLetter from '../pages/JobSeeker/CoverLetter';
export default function Dashboard() {
    return (
        <div>

            {/*  <JobSearch/>
            <WorkingTimeAdd/>
            <WorkingTypeAdd/>
            <ComputerSkill/>
           <ComputerSkillUpdate/> */}
            <Route exact path="/" component={JobPostingsList} />
            <Route exact path="/    " component={JobPostingsList} />
            <Route path="/jobposting/:id" component={JobPostingDetail} />
            <Route path="/jobpostingAdd" component={JobPostingAdd} />
            <Route path="/computerSkillAdd" component={ComputerSkillAdd} />
            <Route exact path="/cv" component={CvList} />
            <Route path="/cvDetail" component={CvDetail} />
            <Route exact path="/coverLetter" component={CoverLetter}/>
            <Route path="/coverLetterAdd" component={CoverLetterAdd}/>
            <Route path="/coverLetterUpdate" component={CoverLetterUpdate}/>
            <Route path="/education" component={EducationInformationAdd}></Route>
            <Route path="/personel" component={PersonelAdd}></Route>
            {/*<JobPostingAdd/>
          <JobPostingsList/> */}
        </div>
    )
}
