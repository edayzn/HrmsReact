import React from 'react'
import JobPostingsList from '../pages/Employer/JobPostingsList';
import JobSearch from './JobSearch';
import ComputerSkill from "../pages/JobSeeker/ComputerSkill"
import JobPostingAdd from '../pages/Employer/JobPostingAdd';
import WorkingTimeAdd from '../pages/SystemPersonel/WorkingTimeAdd';
import WorkingTypeAdd from '../pages/SystemPersonel/WorkingTypeAdd';
import { Route } from 'react-router';
import JobPostingDetail from '../pages/Employer/JobPostingDetail';
import Cv from '../pages/JobSeeker/Cv';
import CvDetail from '../pages/JobSeeker/CvDetail';
import ComputerSkillAdd from '../pages/JobSeeker/ComputerSkillAdd';
import CoverLetterAdd from '../pages/JobSeeker/CoverLetterAdd';
import EducationInformationAdd from '../pages/JobSeeker/EducationInformationAdd';
import PersonelAdd from '../pages/SystemPersonel/PersonelAdd';
import CoverLetterUpdate from '../pages/JobSeeker/CvUpdate/CoverLetterUpdate';
import CoverLetter from '../pages/JobSeeker/CoverLetter';
import PersonelUpdate from '../pages/SystemPersonel/PersonelUpdate';
import JobSeeker from '../pages/JobSeeker/JobSeeker';
import EducationInformationUpdate from '../pages/JobSeeker/CvUpdate/EducationInformationUpdate';
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
            <Route exact path="/jobposting/:id" component={JobPostingDetail} />
            <Route exact path="/jobpostingAdd" component={JobPostingAdd} />
            <Route exact path="/jobpostings/cityId/:cityId" component={JobPostingsList}/>
            <Route exact path="/jobpostings/workingId/:workingId" component={JobPostingsList}/>
            <Route exact path="/jobpostings/cityId/:cityId/workingId/:workingId" component={JobPostingsList}/>
            <Route exact path="/jobpostings/getallbypage/pageNo/:pageNo/pageSize/:pageSize" component={JobPostingsList}/>
            <Route exact path="/jobSeeker" component={JobSeeker}/>
            <Route exact path="/computerSkillAdd" component={ComputerSkillAdd} />
            <Route exact path="/cv" component={Cv} />
            <Route path="/cvDetail" component={CvDetail} />
            <Route exact path="/coverLetter" component={CoverLetter}/>
            <Route path="/coverLetterAdd" component={CoverLetterAdd}/>
            <Route path="/coverLetterUpdate" component={CoverLetterUpdate}/>
            <Route path="/education" component={EducationInformationAdd}></Route>
            <Route exact path="/personel" component={PersonelAdd}></Route>
            <Route exact path="/personelUpdate" component={PersonelUpdate}></Route>
            <Route exact path="/educationInformationUpdate" component={EducationInformationUpdate}/>
            {/*<JobPostingAdd/>
          <JobPostingsList/> */}
        </div>
    )
}
