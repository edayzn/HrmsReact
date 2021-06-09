import React from 'react'
import CityList from '../pages/CityList';
import JobPostingsList from '../pages/JobPostingsList';

export default function Dashboard() {
    return (
        <div>
            <CityList/>
           <JobPostingsList/>
        </div>
    )
}
