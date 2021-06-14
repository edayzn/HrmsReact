import React from 'react'
import JobPostingsList from '../pages/Employer/JobPostingsList';
import JobSearch from './JobSearch';
import JobPostingAdd from '../pages/Employer/JobPostingAdd';

export default function Dashboard() {
    return (
        <div>
            <JobSearch/>
           <JobPostingAdd/>
           <JobPostingsList/>
        </div>
    )
}
