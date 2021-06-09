import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import JobPostingService from "../services/jobPostingService"
 
export default function JobPostingsList() {
 
    const [jobAdvertisement, setJobPostings] = useState([]);

  useEffect(()=>{
      let jobPostingService = new JobPostingService()
      jobPostingService.getJobPostings().then(result=>setJobPostings(result.data.data))
  })
    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Firma Adı</Table.HeaderCell>
                        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Yayın Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>İş Detayı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisement.map(jobAdvertisement => (
                            <Table.Row key={jobAdvertisement.jobId}>
                                <Table.Cell>{jobAdvertisement.employer.company_name}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobPosition.position_name}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.numberOfPositions}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.job_description}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}
