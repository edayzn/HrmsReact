import React from 'react'
import CityList from '../pages/CityList';
import JobPostingsList from '../pages/JobPostingsList';
import JobSearch from './JobSearch';

export default function Dashboard() {
    return (
        <div>
            <JobSearch/>
           <JobPostingsList/>
        </div>
    )
}
