import React from 'react'
import JobPostingsList from '../pages/Employer/JobPostingsList';
import JobSearch from './JobSearch';
import JobPostingAdd from '../pages/Employer/JobPostingAdd';
import WorkingTimeAdd from '../pages/SystemPersonel/WorkingTimeAdd';
import WorkingTypeAdd from '../pages/SystemPersonel/WorkingTypeAdd';
export default function Dashboard() {
    return (
        <div>
            <JobSearch/>
            <WorkingTimeAdd/>
            <WorkingTypeAdd/>
           <JobPostingAdd/>
          <JobPostingsList/>
        </div>
    )
}
