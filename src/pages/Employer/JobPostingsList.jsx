import React, { useState, useEffect } from 'react'
import JobPostingService from "../../services/jobPostingService"
import { useParams } from 'react-router';
import { Icon, Button, Divider, Grid, Pagination } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import JobSearch from '../../layouts/JobSearch';
export default function JobPostingsList() {


    const [jobPostings, setJobPostings] = useState([]);
    const [jobPostingsCount, setJobPostingsCount] = useState([]);
    const [render, setRender] = useState(false);
    let { cityId, workingId, pageNo, pageSize } = useParams();

    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService.getJobPostings().then(result => setJobPostings(result.data.data));
        if (cityId && workingId) {
            jobPostingService.getCityIdAndWorkingTimeId(cityId, workingId).then((result) => setJobPostings(result.data.data));
        } else if (cityId) {
            jobPostingService.getCityId(cityId).then((result) => setJobPostings(result.data.data));
        } else if (workingId) {
            jobPostingService.getWorkingId(workingId).then((result) => setJobPostings(result.data.data));
        } else if (pageNo, pageSize) {
            jobPostingService.getPage(pageNo, pageSize).then((result) => setJobPostings(result.data.data));
        } else {
            jobPostingService.getPage(1, 9).then((result) => setJobPostings(result.data.data));
        }
        jobPostingService.getActiveJobPosting().then((result) => setJobPostingsCount(result.data.data));

    }, []);


    function handlePagination(pageNo) {
        let jobService = new JobPostingService()
        jobService.getPage(pageNo, pageSize);
    }
    return (
        <div>
            <Divider horizontal style={{ marginBottom: "10px" }}>
                <div style={{ paddingTop: "10px", lineHeight: "0px", fontSize: "20px" }}>AKTİF İŞ İLANLARI</div>
            </Divider>
            <div className="job-posting-filter-panel">
                <JobSearch />
            </div>
            <Grid columns={3} style={{ marginTop: "30px" }}>
                {
                    jobPostings.map((jobPosting, index) => (
                        <Grid.Column style={{ paddingTop: "0px" }} key={jobPosting.jobId}>
                            <div>
                                <div>
                                    <div className="job-posting-card-header">
                                        <b>{jobPosting.employer.company_name}</b>
                                    </div>
                                    <div className="job-posting-card-body">
                                        <div className="job-posting-card-city">
                                            <Icon name="map marker alternate" />
                                            {jobPosting.city.ctyName}
                                        </div>
                                        <div className="job-posting-card-position">
                                            <span style={{ color: "#c0c0c0" }}>Pozisyon </span>
                                            {jobPosting.jobPosition.position_name}
                                        </div>
                                        <Divider style={{ marginBottom: "2px", marginTop: "1px" }} />
                                        <div className="job-posting-card-job-description">
                                            <span style={{ color: "#c0c0c0" }}>İş Açıklaması </span>
                                            <br />
                                            {jobPosting.job_description}
                                        </div>
                                    </div>
                                </div>
                                <div className="job-posting-card-detail-button">
                                    <Button
                                        primary as={NavLink} to={`/jobposting/${jobPosting.jobId}`}>
                                        <Icon
                                            name="briefcase"
                                            className="job-posting-card-detail-button-icon"
                                        /> <span>Detaylarına Git</span>
                                    </Button>
                                </div>
                            </div>
                        </Grid.Column>
                    ))}
            </Grid>
            <Pagination id="pag" defaultActivePage={pageNo} pointing secondary totalPages={jobPostingsCount.length / pageSize} onPageChange={(event, data) => handlePagination(data.activePage)} />
        </div>
    );
}
