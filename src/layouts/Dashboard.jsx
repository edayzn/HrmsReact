import React from 'react'
import JobPostingsList from '../pages/Employer/JobPostingsList';
import JobSearch from './JobSearch';
import ComputerSkill from "../pages/JobSeeker/ComputerSkill"
import JobPostingAdd from '../pages/Employer/JobPostingAdd';
import WorkingTimeAdd from '../pages/SystemPersonel/WorkingTimeAdd';
import WorkingTypeAdd from '../pages/SystemPersonel/WorkingTypeAdd';
export default function Dashboard() {
    return (
        <div>
            <JobSearch/>
            <WorkingTimeAdd/>
            <WorkingTypeAdd/>
            <ComputerSkill/>
           <JobPostingAdd/>
          <JobPostingsList/>
        </div>
    )
}
